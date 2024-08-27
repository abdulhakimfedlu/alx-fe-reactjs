import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Simulate authentication
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
