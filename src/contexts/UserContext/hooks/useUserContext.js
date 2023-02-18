import { useContext } from "react";
import UserContext from "../context/UserContext";

export function useUserContext() {
    const contextValue = useContext(UserContext);
    return { ...contextValue };
}