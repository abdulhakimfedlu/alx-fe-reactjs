import React, { useState } from 'react';

const SearchResult = ({ users, loading, error }) => {
  const [visibleUsers, setVisibleUsers] = useState(10);  // To show initial results

  const handleLoadMore = () => {
    setVisibleUsers(prev => prev + 10);  // Load 10 more users
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="space-y-4">
      {users.slice(0, visibleUsers).map((user) => (
        <div key={user.id} className="p-4 border-b">
          <img src={user.avatar_url} alt={user.login} width="50" className="rounded-full" />
          <h3>{user.login}</h3>
          <p>Location: {user.location || 'Not specified'}</p>
          <p>Repositories: {user.public_repos}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
      ))}
      {visibleUsers < users.length && (
        <button onClick={handleLoadMore} className="w-full p-2 bg-blue-500 text-white rounded">
          Load More
        </button>
      )}
    </div>
  );
};

export default SearchResult;
