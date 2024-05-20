import React, { useState } from "react";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../slices/authSlice";
import { setUser } from "../../slices/profileSlice";

const AccountDeactivation = () => {
  const [confirmDeletion, setConfirmDeletion] = useState(false);
  const [message, setMessage] = useState(null);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteAccountHandler = () => {
    if (!confirmDeletion) {
      setMessage("Confirm your decision by ticking the box");
      return;
    }

    //axios request to delete account

    async function fetchData() {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/deleteAccount`,
        {
          headers: {
            Authorisation: `Bearer ${token}`,
          },
        }
      );
      const data = response.data;
      console.log("Account deletion related", JSON.stringify(data));
      if (data && !data.success) {
        toast.error(data.message);
        return;
      }
      toast.success(data.message);

      localStorage.removeItem("token");
      localStorage.removeItem("user");
      dispatch(setToken(null));
      dispatch(setUser(null));


      //redirect to login page
      navigate("/login");
    }
    fetchData();
  };
  return (
    <div
      className={`mx-auto p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 dark:text-gray-300`}
    >
      <h1 className="text-2xl font-semibold mb-4">
        Account Deletion & Deactivation
      </h1>
      <p className="mb-4">
        Your account will be deleted immediately and you will be logged out of
        CampusNavigator.
      </p>
      <div className="mx-auto">
        <div className="mb-4">
          <p className="font-semibold">Confirmation</p>
          <p>
            Are you sure you want to delete your account? This action cannot be
            undone.
          </p>
        </div>

        <div className="mb-4">
          <p className="font-semibold">Consequences</p>
          <p>
            Deleting your account will permanently remove all of your personal
            information, including your profile, settings, saved data, and any
            content associated with your account.
          </p>
          <p>
            You will lose access to your account and will be logged out from all
            devices. Please ensure that you have backed up any important data
            before proceeding with account deletion.
          </p>
        </div>

        <div className="mb-4">
          <p className="font-semibold">Note</p>
          <p>
            Deleting an account is permanent. Upon successful deletion, you
            can't restore the account.
          </p>
        </div>

        <div className="mb-4  ">
          <input
            type="checkbox"
            name="confirmDeletion"
            id="confirmDeletion"
            className="mr-2 cursor-pointer"
            onChange={(e) => {
              setConfirmDeletion(e.target.checked);
              console.log(confirmDeletion);
            }}
          />
          <label htmlFor="confirmDeletion">
            I understand, delete my account anyway
          </label>
        </div>

        {message && !confirmDeletion && (
          <p className="text-red-500">{message}</p>
        )}

        <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
          onClick={deleteAccountHandler}
        >
          Delete My Account
        </button>
      </div>
    </div>
  );
};

export default AccountDeactivation;
