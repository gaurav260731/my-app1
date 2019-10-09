import React from 'react';
import './style.css';
import { BrowserRouter as Link } from "react-router-dom";

const Header = (props) =>{
    return (
      <React.Fragment>
        <ul>
          <li className="menu">
          
       {/* <div className="menu"><a href="#aboutus">About Us</a></div>
       <div className="menu"><a href="#blog">Blog</a></div>
       <div className="menu">Contact Us</div> */}
       
       {/* <a href={'#'+props.val.url} alt="header-val">{props.val.title}</a> */}

       <Link to={props.val.url} >{props.val.title}</Link>
          </li>
        </ul>
       </React.Fragment>
    )
}

export default Header;
