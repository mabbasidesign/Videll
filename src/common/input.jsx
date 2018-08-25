import React, { Component } from 'react';

// const Input = ({ name, label, error, ...rest }) => {
//     return (
//             <div className="form-group">
//                 <label htmlFor={name}> { label }</label>
//                 <input
//                 {...rest}
//                 name={name}
//                 id={name}
//                 className="form-control"/>
//                 { error && <div className="alert alert-danger"> {error} </div> }
//             </div>
//     );
// }

const Input = ({ type, name, label, value, onChange, error }) => {
    return (
            <div className="form-group">
                <label htmlFor={name}> { label }</label>
                <input
                value={value}
                onChange={onChange}
                type={type}
                name={name}
                id={name}
                className="form-control"/>
                { error && <div className="alert alert-danger"> {error} </div> }
            </div>
    );
}
 
 
export default Input;