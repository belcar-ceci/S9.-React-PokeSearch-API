import React from 'react';
import { Link } from "react-router-dom";
import Card from '../components/Card';
import '../assets/style/home.css';

const Home = () => {
  return (
    <main>
    <div className='container-home'>
        <div className='section-card'>
            <h1 className='Title'>Poke<span className='text-title'>API Search</span></h1>
            <p className='lorem-ipsum'>Pokémon Let's Go, Pikachu! y Let's Go, Eevee!.</p>
        <div className='btnAuth'>
        
        <Link to="/Login"><button className='btnLogin'>Login</button></Link>
        
        <Link to="/Registration"><button className='btnRegister'>Register</button></Link>
        </div>
        </div>
      
        <div>
        <Card id='1' />
        </div>
  </div>
  </main>
  )
}

export default Home