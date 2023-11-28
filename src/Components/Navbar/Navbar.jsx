import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import logo_png from '../Assests/logo_png.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ShopContext } from '.../Context/ShopContext';
const Navbar = () => {
    const [menu,setMenu]= useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo_png} alt=""/>
        <p>BellaBloom</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("makeup")}}><Link style={{textDecoration:'none'}} to='/makeup'>Makeup</Link>{menu==="makeup"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("skin")}}><Link style={{textDecoration:'none'}} to='/skin'>Skin</Link>{menu==="skin"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("hair")}}><Link style={{textDecoration:'none'}} to='/hair'>Hair</Link>{menu==="hair"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("frag")}}><Link style={{textDecoration:'none'}} to='/frag'>Fragrance</Link>{menu==="frag"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mom_&_baby")}}><Link style={{textDecoration:'none'}} to='/mom_&_baby'>Mom and Baby</Link>{menu==="mom_&_baby"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><ShoppingCartIcon style={{ fontSize: 50 }} /></Link>
        <div className='nav-cart-count'>
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  )
}

export default Navbar
