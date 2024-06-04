import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {useUser} from './useUser'

const PrivateRoute = ({ element: Component, ...rest }) => {
  const user = useUser();
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Logic to fetch user data (if not already done)
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <div>Loading...</div> // Show loading state while fetching user
  ) : user ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/signIn" />
  );
};

export default PrivateRoute