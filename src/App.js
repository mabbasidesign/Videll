import React, { Component } from 'react';
import Movies from './components/movies'
import Customers from './components/customers';
import Rental from './components/rental';
import NotFound from './components/notFound';
import { Route, Redirect, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="container">
        <Switch>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rental" component={Rental}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default App;
