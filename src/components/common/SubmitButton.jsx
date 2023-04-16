import React from 'react'
import { useNavigate } from 'react-router-dom';

function SubmitButton(props) {
    const navigate = useNavigate();
  return (
        <div>
        <button 
        disabled={props.validate} 
        className="btn btn-primary" 
        onClick={()=>navigate("/movies")}>
          {props.label}
        </button>
        </div>
);
}

export default SubmitButton