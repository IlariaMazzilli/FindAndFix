import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../auth/AuthContext';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { user, token } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/signIn', { replace: true });
    } else {
      setIsLoading(false);
    }
  }, [token, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return user && user.isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <div>
      <p>Access denied. You are not logged in.</p>
      <Link to="/signIn">Click here to log in</Link>
    </div>
  );
};

export default PrivateRoute;