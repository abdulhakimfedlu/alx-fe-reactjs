import React, { useState } from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext'; // Import your context
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      {/* ProfilePage with UserContext */}
      <UserContext.Provider value={userData}> {/* Provide the userData here */}
        <ProfilePage /> {/* ProfilePage and its children can access userData */}
      </UserContext.Provider>

      {/* Counter Component */}
      <div>
        <h1>My Counter App</h1>
        <Counter /> {/* Use the Counter component */}
      </div>

      {/* Welcome Message */}
      <div>
        <WelcomeMessage />
      </div>

      {/* Main Application Structure */}
      <div>
        <Header />
        <MainContent />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <Footer />
      </div>

      {/* Vite + React Demo */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
