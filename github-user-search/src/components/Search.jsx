
return (
  <>
    <form onSubmit={(e) => { e.preventDefault(); handleSearch(e.target[0].value); }}>
      <input type="text" placeholder="Enter GitHub username" />
      <button type="submit">Search</button>
    </form>

    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    {userData && (
      <div>
        <img src={userData.avatar_url} alt={userData.name} width="100" />
        <h3>{userData.name}</h3>
        <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
      </div>
    )}
  </>
);
