import React from 'react'
import Hero from '../assets/img/hero-belcar.png';
import '../assets/style/about.css';

const About = () => {
  return (
    <div className='cardAbout'>
      <div className='card-list'>
        <header className='card-image'>
          <img src={Hero} alt='Banner_Encoding' className='imgHero' />
        </header>
        <section className='card-header'>
          <h1 className='nameAbout'>Hi!!! ♥️, my name is Cecilia Carbajal Belmont.</h1>
          <p className='propostAbout'>The purpose of this project is to show some React concepts, such as component usage, Hooks, route handling, calling an API, implementing business logic, as well as login/register. For the layout, Styled-Components is implemented together with CSS and HTML.</p>
        </section>
      </div>
    </div>
  )
}

export default About