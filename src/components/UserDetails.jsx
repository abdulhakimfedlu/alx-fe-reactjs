import React, { useContext } from 'react'; // Importing React and useContext
import UserContext from './UserContext'; // Importing UserContext

function UserDetails() {
  const userData = useContext(UserContext); // Get userData from context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails; // Exporting the UserDetails component
