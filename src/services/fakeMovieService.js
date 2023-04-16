import * as genresAPI from "./fakeGenreService";
// import randomstring from "randomstring";
// import * genresAPI from "./fakeGenreService"
export const movies = [
    {
        _id: "0000", 
        title: "The Lion King",
        genre: { _id:"923475098234509", name:"Adventure"},
        numberInStock: 6,
        dailyRentalRate: 2.5,
        year: "2019",
        runtime: "118 min",
        liked: true
    //  "Poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"
    },
    {
        _id: "0001", 
        title: "Mowgli: Legend of the Jungle",
        genre: { _id:"923475098234509", name:"Adventure"},
        numberInStock: 20,
        dailyRentalRate: 3.5,
        year: "2018",
    runtime: "104 min",
    // "Poster": "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg"
    },
    {
        _id: "0002", 
        title: "Doctor Strange",
        genre: { _id:"892734095873459", name:"Sci-Fic"},
        numberInStock: 15,
        dailyRentalRate: 4.5,
        year: "2016",
    runtime: "115 min",
    // "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
    },
    {
        _id: "0003", 
        title: "John Wick",
        genre: { _id:"394875092345324", name:"Action"},
        numberInStock: 16,
        dailyRentalRate: 6.5,
        year: "2014",
    runtime: "101 min",
    // "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
    },
    {
        _id: "0004", 
        title: "The Notebook",
     genre: { _id:"723498572345890", name:"Romantic"},
     numberInStock: 30,
     dailyRentalRate: 1.5,
     year: "2004",
    runtime: "123 min"
    },
    {
        _id: "0005", 
        title: "The Avengers",
        genre: { _id:"892734095873459", name:"Sci-Fic"},
        numberInStock: 50,
        dailyRentalRate: 9.5,
        year: "2015",
        runtime: "118 min",
        // "Poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"
        },
        {
        _id: "0006", 
        title: "Avengers 2 Age of Ultron",
        genre: { _id:"892734095873459", name:"Sci-Fic"},
        numberInStock: 113,
        dailyRentalRate: 5.5,
        year: "2018",
        runtime: "104 min",
        // "Poster": "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg"
        },
        {
        _id: "0007", 
        title: "Spiderman far from home",
        genre: { _id:"892734095873459", name:"Sci-Fic"},
        numberInStock: 35,
        dailyRentalRate: 6.5,
        year: "2016",
        runtime: "115 min",
        // "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
        },
        {
        _id: "0008", 
        title: "Don",
        genre: { _id:"394875092345324", name:"Action"},
        numberInStock: 10,
        dailyRentalRate: 2.5,
        year: "2014",
        runtime: "101 min",
        // "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
        },
        {
        _id: "0009", 
        title: "Pathan",
        genre: { _id:"984375982340958", name:"Drama"},
        numberInStock: 70,
        dailyRentalRate: 8.5,
        year: "2004",
        runtime: "123 min"
        }
    ];

    export function getMovies() {
        return movies;
      }
      
      export function getMovie(id) {
        return movies.find(m => m._id === id);
      }
      
      export function saveMovie(movie) {
        let movieInDb = movies.find(m => m._id === movie._id) || {};
        movieInDb.title = movie.title;
        movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
        movieInDb.numberInStock = movie.numberInStock;
        movieInDb.dailyRentalRate = movie.dailyRentalRate;
      
        if (!movieInDb._id) {
          movieInDb._id = Date.now().toString();
          movies.push(movieInDb);
        }
      
        return movieInDb;
      }
      
      export function deleteMovie(id) {
        let movieInDb = movies.find(m => m._id === id);
        movies.splice(movies.indexOf(movieInDb), 1);
        return movieInDb;
      }
      