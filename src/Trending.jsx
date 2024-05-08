import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const Trending = () => {

    const [countries,setCountries] = useState([])
    useEffect(()=>{
        fetch("https://restcountries.com/v2/all")
        .then(res=>res.json())
        .then(json=>setCountries(json))
    },[])

  return (
    <div className='grid-container'>
      {
      countries.map((country)=>(
        <div key={country.name} className="card">
           <div className="card-flag-container">
               <Link to={country.alpha2code}><img className='card-flag' src={country.flags.svg}></img></Link>
           </div>
           <div className="class-info">
            <h2>{country.name}</h2>
            <p>Population:<span>{country.population.toLocaleString()}</span></p>
            <p>Region:<span>{country.region}</span></p>
            <p>Capital:<span>{country.capital}</span></p>
           </div>
        </div>
      ))}   
    </div>
  )
}

export default Trending;