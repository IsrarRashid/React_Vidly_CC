import React from 'react'
import { useNavigate } from 'react-router-dom';

function Redirects() {
    const navigate = useNavigate();
    
      const redirectToMovies =()=>{
        navigate("/movies")
      }
      
    const gotoNotFoundPage = () =>{
      navigate("/not-found")
    }
  return (
    <div>Redirects</div>
  )
}

export default Redirects