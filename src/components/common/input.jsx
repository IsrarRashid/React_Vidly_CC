import React, { Component } from 'react';

const Input = ({name, label, error, ...rest}) => { // this is the interface of our input component
    return ( 
        <div className="mb-3">
                        <label htmlFor={name}>{label}</label>
                        <input
                        // onChange={onChange}
                        // value={value} 
                        // type={type}
                        {...rest}   //the above two properties will be handled by rest parameter which is same as above.
                        name={name}
                        id={name} 
                        className="form-control" />
                        
                        {error && <div className="alert alert-danger">{error}</div>}
                        </div>
     );
};
 
export default Input;