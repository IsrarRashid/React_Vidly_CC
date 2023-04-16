import React from 'react'
import { useNavigate } from 'react-router-dom';

function BackToMovies(props) {
    const navigate = useNavigate();
  return (
        <div>
        <button 
        disabled={props.validate} 
        className="btn btn-primary mt-3" 
        onClick={()=>navigate("/movies")}>
          Back To Movies List
        </button>
        </div>
);
}

export default BackToMovies