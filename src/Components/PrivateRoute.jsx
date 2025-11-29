import { useContext } from "react";
import { useCurrentUser } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { currentUser } = useCurrentUser();

    return currentUser ? children : <Navigate to='/login' />

}

export default PrivateRoute;