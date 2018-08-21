import React, { Component } from 'react';
import Like from '../common/like';
import { Link } from 'react-router-dom';
import TableHeader from '../common/TableHeader';
import TableBody from '../common/TableBody';
import Table from '../common/table';

class MoviesTable extends Component {
   column = [
       { path: 'title', label: 'Title', content: movie => <Link to={`/movies/${movie._id}`}> {movie.title}</Link> },
       { path: 'genre.name', label: 'Genre' },
       { path: 'numberInStock', label: 'Stock' },
       { path: 'dailyRentalRate', label: 'Rate' },
       { key: 'like', content: movie => <Like liked={movie.liked} onClick={ () => this.props.onLike(movie) } /> },
       { key: 'delete', content: movie => <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm"> Delete </button> },
   ]

    render() {
        const { movies,onSort, sortColumn } = this.props
        return (

            // <Table
            //     colunmns={this.column} 
            //     sortColumn={sortColumn} 
            //     onSort={onSort}
            //     data={movies}
            // />
            

            <table className="table">
                <TableHeader 
                    colunmns={this.column} 
                    sortColumn={sortColumn} 
                    onSort={onSort} 
                />
                    <TableBody
                        data={movies}
                        colunmns={this.column}
                    />
            </table>


         );
    }
}  
 
export default MoviesTable;