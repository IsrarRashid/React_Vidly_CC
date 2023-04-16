import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';   //for named exports use curly braces
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';
import SearchBox from './common/searchBox';
import { Link } from 'react-router-dom';

class Movies extends Component {

    state = { 
        movies : [],
        currentPage:1,
        pageSize: 4,
        genres: [],
        sortColumn: {path:"title", order:"asc"},
        searchQuery:"",
        selectedGenre:null
     }

     componentDidMount(){
        const genres = [{_id: "", name:"All Genres"},...getGenres()]
        this.setState({movies:getMovies(),genres});  
     }

     handleDelete = (movie)=>{
        const movies = this.state.movies.filter(m=>m._id !== movie._id);
        this.setState({movies});
     };

     renderMovies(){
        if(this.state.movies.length === 0) return <p>There are 0 movies left!</p>
     }
     handleLike = movie =>{
        console.log("Like clicked",movie);
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
     };

     handlePageChange = page => {
        this.setState({currentPage: page});
     };

     handleGenreSelect = genre =>{
        this.setState({selectedGenre: genre, searchQuery:"", currentPage : 1});
     }

     handleSort = sortColumn =>{
        this.setState({sortColumn});
     };

     handleSearch = query =>{
      this.setState({searchQuery:query, selectedGenre: null, currentPage: 1})
     }

     getPagedData = () =>{
      const{pageSize, currentPage, searchQuery, movies:allMovies, selectedGenre, sortColumn } = this.state;
      
      let filtered = allMovies;
      if(searchQuery)
      filtered = allMovies.filter(m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
      else if(selectedGenre && selectedGenre._id)
      filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

      // const filtered = 
      //   selectedGenre && selectedGenre._id 
      //   ? allMovies.filter(m=> m.genre._id === selectedGenre._id) 
      //   : allMovies;
        
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted,currentPage,pageSize);

        return {totalCount: filtered.length, data: movies };
     }

    render() { 
        const{length:count} =this.state.movies;  //  object destructuring
        const{pageSize, currentPage, sortColumn} = this.state;
        
        if(count === 0) return <p>There are 0 movies left!</p>   // refactor this line by applying object destructuring

        const {totalCount, searchQuery, data:movies} = this.getPagedData();

        return (
            <div className='row'>
                <div className="col-3">
                <ListGroup 
                items={this.state.genres}
                onItemSelect={this.handleGenreSelect}
                selectedItem={this.state.selectedGenre} />
                </div>

                <div className="col">
                <Link className="btn btn-primary" to="/movies/new">Add New Movie</Link>
                <p>Showing {totalCount} movies in the database</p>
                <SearchBox value={searchQuery} onChange={this.handleSearch} />
                <MoviesTable 
                movies={movies} 
                onLike={this.handleLike} 
                onDelete={this.handleDelete}
                onSort={this.handleSort}
                sortColumn={sortColumn} />
                
                <Pagination
                itemsCount={totalCount} 
                pageSize = {pageSize}
                currentPage = {currentPage} 
                onPageChange={this.handlePageChange} />
                </div>                
            </div>
        );
    }
}
 
export default Movies;