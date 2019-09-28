import React from 'react';
import './App.css';
import Users from './components/users/Users';
import NavBar from './components/partials/NavBar';
import SearchUser from './components/users/SearchUser'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SearchUser/>
      <Users/>
    </div>
  );
}

export default App;
