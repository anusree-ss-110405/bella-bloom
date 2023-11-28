import React from 'react';
import { Link } from 'react-router-dom';
import './Popular.css';
import br1 from '../Assests/br1.jpg';
import br2 from '../Assests/br2.jpg';
import br3 from '../Assests/br3.jpg';
import br4 from '../Assests/br4.jpg';
import br5 from '../Assests/br5.jpg';

const Popular = () => {
  return (
    <div className="brands">
      <h1>Explore Our Top Brands</h1>
      <div className="brands-offers-1">
        <ul>
          <li>
            <Link to="/hair">
              <img src={br1} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/hair">
              <img src={br2} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/hair">
              <img src={br3} alt="" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="brands-offers-2">
        <ul>
          <li>
            <Link to="/hair">
              <img src={br4} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/hair">
              <img src={br5} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Popular;
