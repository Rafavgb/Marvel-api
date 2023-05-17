import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

const useAuth = () => {
    const Context = useContext(AuthContext)

    return Context
}

export default useAuth