import React, { Component } from 'react';

// Input: like: boolean
// output: on click
/**you can see that this component is like controlled component because it receives all 
 * the data you need via props and notify any changes to the data again via props. so 
 * it doesn't have any state itself and here we have not any helper method or event handler
 * we only have render method, so we can turn this component to stateless functional component,
 * and simplify the component. type sfc for statement functional component. 
 */
// ***important*** remember when you convert a class to a functional component, you should get 
// rid of all references of "this" and pass props as parameter of the function.
const Like = props => {
    
    let classes = "btn fa fa-heart";
    if(!props.liked) classes += "-o"; 
    
    return <i onClick={props.onClick} className={classes} aria-hidden="true"></i>; //raised custom event which happens to be called on click
    // in case of styling
    // return <i onClick={props.onClick} style={{cursor:"pointer"}} className={classes} aria-hidden="true"></i>; //raised custom event which happens to be called on click
}
 
export default Like;