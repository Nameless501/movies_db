import { useContext } from "react";
import PortalContext from "../context/PortalContext";

export function usePortalContext() {
  const contextValue = useContext(PortalContext);
  return { ...contextValue };
}
