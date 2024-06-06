import { useState, useEffect } from "react";
import { useToken } from "./useToken";

/*hook estrae il payload da un JWT e lo imposta come stato dell'utente*/ 

export const useUser = () => {
  const [token] = useToken();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      try {
        const encodedPayload = token.split('.')[1];
        const decodedPayload = atob(encodedPayload);
        const userPayload = JSON.parse(decodedPayload);
        setUser({ ...userPayload, isAuthenticated: true });
      } catch (e) {
        console.error("Invalid token:", e);
        setUser({ isAuthenticated: false });
      }
    } else {
      setUser({ isAuthenticated: false });
    }
  }, [token]);

  return user;
};