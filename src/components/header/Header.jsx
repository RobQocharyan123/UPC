

import React from 'react'
import './Header.css';
import back1 from "../../assets/header/image-corusel1.jpg"
import back2 from "../../assets/header/image-corusel2.jpg"
import Nav from './nav/Nav';
import Section1 from './corusel/Corusel';
import Slaq from './slaq/Slaq';

export const Header = () => {
  const items = [
    { 
      imgUrl:back1,
      titleMas1: 'Welcome to Univaersal', 
      titleMas2:"Programing Company",  
      content: "Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate business purposes."
    },
    { 
      imgUrl:back2,
      titleMas1: 'Create Web Site', 
      titleMas2:"Award-Winning Software", 
      content: 'The software solutions developed by our company have been numerously awarded for usability and innovative features.' 
    },
    { 
      imgUrl:back1,
      titleMas1: 'Welcome to Univaersal ', 
      titleMas2:"Programing Company",  
      content: "Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate business purposes."
    },
  ];

  return (
    <div className="App">
      <header className='header'>
         <Nav />
      </header>
      <Section1 items={items} />
      <Slaq/>
    </div>
  );
}
