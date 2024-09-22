import React from 'react';

const SearchResult = ({ userData, loading, error }) => {
  if (loading) {
    return <p>Loading...</p>;  // Show loading state
  }

  if (error) {
    return <p>{error}</p>;  // Show error message
  }

  if (userData) {
    return (
      <div>
        <img src={userData.avatar_url} alt={userData.name} width="100" />
        <h3>{userData.name}</h3>
        <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
      </div>
    );
  }

  return null;  // Return null if no data is available
};

export default SearchResult;
