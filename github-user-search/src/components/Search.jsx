import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Async function to handle search
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Await the API call
      const result = await fetchUserData(username);

      // If the API call is successful, update users state
      setUsers(result.items || []); // 'items' if the API returns a list of users
    } catch (err) {
      // Handle any error that occurs during the API call
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Search GitHub users..."
          className="border p-2 rounded w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white mt-2 p-2 rounded"
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Search Results */}
      <div>
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="border p-4 mb-2 rounded">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  {user.login}
                </a>
              </p>
              <p>Location: {user.location || "Unknown"}</p>
              <p>Repos: {user.public_repos}</p>
            </div>
          ))
        ) : (
          !loading && <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
