import React from "react";

const AccountDeactivation = () => {
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

        <div className="mb-4">
          <input
            type="checkbox"
            name="confirmDeletion"
            id="confirmDeletion"
            className="mr-2 cursor-pointer"
          />
          <label htmlFor="confirmDeletion">
            I understand, delete my account anyway
          </label>
        </div>

        <p>Confirm your decision by ticking this box</p>

        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">
          Delete My Account
        </button>
      </div>
    </div>
  );
};

export default AccountDeactivation;
