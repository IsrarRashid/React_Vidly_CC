import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import './App.css';
import RegisterForm from './components/registerForm';
import NewMovie from './components/newMovie';
import SubmitButton from './components/common/SubmitButton';

function App() {
  return (
    <React.Fragment>
      <Router>
    <NavBar />
    <main className='container'>
        <Routes>
      <Route path="/login" element={<LoginForm />}></Route>
      <Route path="/register" element={<RegisterForm />}></Route>
      <Route path="/movies/new" element={<NewMovie />}></Route>
      <Route path="/movies/:id" element={<MovieForm />}></Route>
      <Route path="/movies" element={<Movies />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
      <Route path="/rentals" element={<Rentals />}></Route>
      <Route path="/not-found" element={<NotFound />}></Route>
      <Route path="/" element={<Navigate replace to="/movies" />} ></Route>
      <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </main>
      </Router>
    </React.Fragment>
  );
}

export default App;
