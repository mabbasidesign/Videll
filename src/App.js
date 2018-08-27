import React, { Component } from 'react';
import Movies from './components/movies';
import { ToastContainer } from "react-toastify";
import Customers from './components/customers';
import Rental from './components/rental';
import MovieForm from './components/movieForm';
import NotFound from './components/notFound';
import NavBar from "./components/navBar";
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import { Route, Redirect, Switch } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css"
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/movies/:id" component={MovieForm}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rental" component={Rental}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
