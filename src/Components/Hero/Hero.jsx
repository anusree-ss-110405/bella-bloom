import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import Hero1 from '../Assests/Hero1.jpg';
import Hero2 from '../Assests/Hero2.jpg';
import Hero3 from '../Assests/Hero3.jpg';
import Hero4 from '../Assests/Hero4.jpg';
import Hero5 from '../Assests/Hero5.jpg';

const Hero = () => {
  return ( 
    <div className='ad-pic'>
      <ul>
        <li>
          <Link to="/frag">
            <img src={Hero1} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/frag">
            <img src={Hero2} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/frag">
            <img src={Hero3} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/frag">
            <img src={Hero4} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/frag">
            <img src={Hero5} alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Hero;
