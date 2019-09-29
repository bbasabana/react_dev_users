import React from 'react';
import './App.css';
import Users from './components/users/Users';
import NavBar from './components/partials/NavBar';
import UserItem from './components/users/UserItems'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:login" component={UserItem} />
          <Route exact component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
