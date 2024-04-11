import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function OpenRoute({ children }) {
    const {token} = useSelector((state) => state.auth);

    return token === null ? children : <Navigate to="/" />;
}

export default OpenRoute;
