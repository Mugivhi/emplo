import './App.css';
import React from 'react';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.css';
import Registration from './components/Registration';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      
       <Router>
        <Switch>
          <Route exact path="/"  component={Login}></Route>
          <Route path="/sign-up" component={Registration}></Route>
          <Route path="/"  component={Landing}></Route>
       </Switch>
      </Router>
    </div>
  );
}

export default App;
