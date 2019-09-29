import React from 'react';
import './style.css';

const Header = (props) =>{
    return (
      <React.Fragment>
       <div className="menu">{props.val.title}</div>
       {/* <div className="menu"><a href="#aboutus">About Us</a></div>
       <div className="menu"><a href="#blog">Blog</a></div>
       <div className="menu">Contact Us</div> */}
       </React.Fragment>
    )
}

export default Header;
