import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/*Navbar*/}

      {/*SideDrawer*/}

      {/*Backdrop*/}
      <main>
        <Switch>
          <Route exact path="/" component={HomeS}/>
          <Route exact path="/product/:id" component={ProductS}/>
          <Route exact path="/cart" component={CartS}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;