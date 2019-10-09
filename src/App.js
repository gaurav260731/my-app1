import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'react-awesome-slider/dist/styles.css';
import Business from '../src/Component/Business/Business';
import slider from '../src/Component/slider/slider';
import entert from '../src/Component/entertainment/entertainment';
import google from '../src/Component/google/google';
import hindu from '../src/Component/hindu/hindu';
import Hacker from '../src/Component/Hacker/Hacker';
import mtv from '../src/Component/mtv/mtv';
import sports from '../src/Component/sports/sports'; 
import techcrunch from '../src/Component/techcrunch/techcrunch';
import timeofindia from '../src/Component/timeofindia/timeofindia';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <React.Fragment>
      <header className="menu-container">
      <Router>
      <div>
        {/* {
          header.map((val, i) => (
            <Header val = {val} key = {i}/>
          ))
        } */}
        <ul>
          <li className="menu">
            <Link to='/'>Home</Link>
          </li>
          <li className="menu">
            <Link to='/entert'>Entertainment</Link>
          </li>
          <li className="menu">
            <Link to='/sports'>Sports News</Link>
          </li>
          <li className="menu">
            <Link to='/Business'>Business News</Link>
          </li>
          <li className="menu">
            <Link to='/google'>Google News</Link>
          </li>
          <li className="menu">
            <Link to='/Hacker'>Hacker News</Link>
          </li>
          <li className="menu">
            <Link to='/mtv'>MTV News</Link>
          </li>
          <li className="menu">
            <Link to='/hindu'>Hindu News</Link>
          </li>
          <li className="menu">
            <Link to='/techcrunch'>Techcrunch</Link>
          </li>
          <li className="menu">
            <Link to='/timeofindia'>Times of India</Link>
          </li>
        </ul>

        <Route exact path="/" component={slider}></Route>
        <Route path="/Business" component={Business}></Route>
        <Route path="/google" component={google}></Route>
        <Route path="/entert" component={entert}></Route>
        <Route path="/Hacker" component={Hacker}></Route>
        <Route path="/sports" component={sports}></Route>
        <Route path="/mtv" component={mtv}></Route>
        <Route path="/hindu" component={hindu}></Route>
        <Route path="/techcrunch" component={techcrunch}></Route>
        <Route path="/timeofindia" component={timeofindia}></Route>
        
      </div>
         
       </Router>
       
      </header>
  
      <footer>
        <ul>
          <h4><b>Product</b></h4>
          <li>What is product</li>
          <li>Feature</li>
          <li>Pricing Plan</li>
        </ul>
        <ul>
        <h4><b>Resource</b></h4>
          <li>Customer Story</li>
          <li>Solution Providers</li>
          <li>Creators Network</li>
        </ul>
        <ul>
        <h4><b>Help Support</b></h4>
          <li>Contact Us</li>
          <li>Abouts Us</li>
          <li>Blog</li>
        </ul>
        <ul >
          <h3>Follow Us</h3>
          <li className="soc_icon">
          <a href="abc.html" ><img src="https://www.pngfind.com/pngs/m/383-3837923_tripadvisor-facebook-icon-on-white-hd-png-download.png" alt="facebook" width='20' height='20'/></a>
          </li>
          <li className="soc_icon">
          <a href="abc.html" ><img src="https://www.freepngimg.com/thumb/google/62654-google+-icons-computer-google-plus-logo.png" alt="google plus" width='20' height='20'/></a>
          </li>
          <li className="soc_icon">
          <a href="abc.html" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKDhTdt_73PKM5QHmDJPY04Ej-dpfDrpAjYupiSPV7QrUljX95" alt="instagram" width='20' height='20'/></a>
          </li>
        </ul>
      </footer>
      
      </React.Fragment>
  );
}


