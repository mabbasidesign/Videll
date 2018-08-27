import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Pagination from '../common/pagination';
import { Link } from "react-router-dom";
import MoviesTable from './moviesTable'
import ListGroup from '../common/listGroup';
import {getGenres, genres} from '../services/fakeGenreService';
import { paginate } from '../utils/paginate';
import SearchBox from "./searchBox";
import _ from 'lodash';

class Movies extends Component {
    state = { 
        movies: [],
        genres: [],
        pageSize: 4,
        searchQeary: "",
        currentPage: 1,
        selectedGenre: null,
        sortColumn: { path:'title', order:'asc' }
     };

     componentDidMount(){
        const geners = [{ _id:"", name: 'All Genres'}, ...getGenres()];
        this.setState({ movies: getMovies(), genres: geners })
     }

     handleDelete = (movie) =>{
        const mm = this.state.movies.filter(m => m._id !== movie._id)
        this.setState( {movies: mm} )
     }

     handleLike = (movie) =>{
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({ movies })
     }

     handlePageChange = page =>{
        this.setState({ currentPage: page })
     }

     handleGenreSelect = genre => {
         this.setState({ selectedGenre: genre, searchQeary: "", currentPage: 1 })
     }

     handleSearch = query =>{
         this.setState({ searchQeary: query, selectedGenre: null, currentPage: 1 })
     }

     handleSort = sortColumn => {
        this.setState({ sortColumn })
     }

     getPagedata = () => {
        const {
            pageSize, 
            currentPage,
            searchQuery,
            sortColumn, 
            movies: allMovies, 
            selectedGenre
            } = this.state;
        
        let filtered = allMovies;
        if (searchQuery)
            filtered = allMovies.filter(m =>
            m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            );
        else if (selectedGenre && selectedGenre._id)
            filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

        const sorted =
            _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

        const movies =
            paginate(sorted, currentPage, pageSize)

        return { totalCount: filtered.length, data: movies }
     }

    render() {
        const { length: count } = this.state.movies;
        const {
            pageSize, 
            currentPage,
            searchQeary,
            sortColumn, 
            } = this.state;       

        if(count === 0 )
        return <div className="alert alert-danger" ><p>There are no movies in database.</p></div>

        const { totalCount, data: movies } = this.getPagedata();
        
        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup 
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">

                <Link to="/movies/new"
                className="btn btn-primary"
                style={{ marginBottom: 20 }}>
                Add new movie</Link>

                <div className="alert alert-success"> showing {totalCount} movies in the databse </div>
                <SearchBox value={searchQeary} onChange={this.handleSearch}/>
                    <MoviesTable 
                        movies={movies}
                        sortColumn={sortColumn}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                    />
                    <Pagination
                        itemCount={totalCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange} 
                    />
                </div>
            </div>
         );
    }
}
 
export default Movies;




