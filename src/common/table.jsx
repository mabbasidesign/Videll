import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = ({ colunmns, sortColumn, onSort, data }) => {
    return (       
            <table className="table">
                <TableHeader 
                    colunmns={colunmns} 
                    sortColumn={sortColumn} 
                    onSort={onSort} 
                />
                <TableBody
                    data={data}
                    colunmns={this.column}
                />
            </table>
     );
}
 
export default Table;