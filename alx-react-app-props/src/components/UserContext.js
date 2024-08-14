import React from 'react';

const UserContext = React.createContext();
{
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  
    return (
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
    );
  }
export default UserContext;
