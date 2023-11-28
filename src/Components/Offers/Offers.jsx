import React from 'react';
import { Link } from 'react-router-dom';
import './Offers.css';
import popular1 from '../Assests/popular1.jpg';
import popular2 from '../Assests/popular2.jpg';
import popular3 from '../Assests/popular3.jpg';
import popular4 from '../Assests/popular4.jpg';
import popular5 from '../Assests/popular5.jpg';
import popular6 from '../Assests/popular6.jpg';
import popular7 from '../Assests/popular7.jpg';
import popular8 from '../Assests/popular8.jpg';
import popular9 from '../Assests/popular9.jpg';
import popular11 from '../Assests/popular11.jpg';

const Offers = () => {
  return (
    <div className="popul">
      <h1>Festive Glow Up Essentials</h1>
      <div className="popul-1">
        <ul>
          <li>
            <Link to="/makeup">
              <img src={popular1} alt="" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="popul-2">
        <ul>
          <li><Link to="/makeup"><img src={popular2} alt="" /></Link></li>
          <li><Link to="/makeup"><img src={popular3} alt="" /></Link></li>
          <li><Link to="/makeup"><img src={popular4} alt="" /></Link></li>
          <li><Link to="/makeup"><img src={popular5} alt="" /></Link></li>
          <li><Link to="/makeup"><img src={popular6} alt="" /></Link></li>
          <li><Link to="/makeup"><img src={popular7} alt="" /></Link></li>
          <li><Link to="/makeup"><img src={popular8} alt="" /></Link></li>
          <li><Link to="/makeup"><img src={popular9} alt="" /></Link></li>
          <li><Link to="/makeup"><img src={popular11} alt="" /></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Offers;
