import React, { Component } from 'react';
import Joi from "joi-browser";
import Form from "./common/form"
import { saveMovie, getMovies, getMovie } from "../services/fakeMovieService.js";
import { getGenres } from "../services/fakeGenreService";
// import randomstring from 'randomstring';
import BackToMovies from './common/BackToMovies';

class NewMovie extends Form {
  state = {
    // genres: [],
    data: {
      title: "",
      // genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    errors: {}
  };

  // async populateGenres() {
  //   const { data: genres } = await getGenres();
  //   this.setState({ genres });
  // }

  async populateMovie() {
    try {
      const movieId = this.props.match.params.id;
      if (movieId === "new") return;
      const { data: movie } = await getMovie(movieId);
      this.setState({ data: this.mapToViewModel(movie) });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        this.props.history.replace("/not-found");
      }
    }
  }

  async componentDidMount() {
    // await this.populateGenres();
    await this.populateMovie();
  }

  mapToViewModel = movie => {
    return {
      _id: movie._id,
      title: movie.title,
      // genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    // genreId: Joi.string()
    //   .required()
    //   .label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(1)
      .max(10)
  };

  doSubmit = () => {
    console.log("movie saved");
    saveMovie(this.state.data);
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {/* {this.renderSelect("genreId", "Genre", this.state.genres)} */}
          {/* {this.renderListBox("genreId", "Genre", this.state.genres)} */}
          {this.renderInput("numberInStock", "Number in Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
          <BackToMovies />
          {/* {this.renderSubmitButton("Save")} */}
        </form>
      </div>
    );
  }
}

export default NewMovie;
