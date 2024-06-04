import { useState, useEffect } from "react";
import { useToken } from "./useToken";

export const useUser = () => {
  const [token] = useToken();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      try {
        const encodedPayload = token.split('.')[1];
        const decodedPayload = atob(encodedPayload);
        const userPayload = JSON.parse(decodedPayload);
        setUser(userPayload);
      } catch (e) {
        console.error("Invalid token:", e);
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, [token]);

  return user;
};