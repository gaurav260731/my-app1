import React from 'react';
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
import technology from '../src/Component/timeofindia/timeofindia';
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
            <Link to='/technology'>Technology</Link>
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
        <Route path="/technology" component={technology}></Route>
      </div>
         
       </Router>
       
      </header>
  
      <footer>
        <ul>
          <h4><b>News Division</b></h4>
          <li><a href="https://www.firstpost.com/category/sports" alt="sports">Sports News</a></li>
          <li><a href="https://www.firstpost.com/tech" alt="tech">Tech News</a></li>
          <li><a href="https://www.firstpost.com/category/entertainment" alt="entertainment">Entertainment News</a></li>
          <li><a href="https://www.firstpost.com/category/business" alt="sports">Business News</a></li>
        </ul>
        <ul>
        <h4><b>General Section</b></h4>
          <li><a href="http://www.forbesindia.com/" alt="forbes">Forbes</a></li>
          <li><a href="http://overdrive.in/" alt="overdrive">Over drive</a></li>
          <li><a href="http://www.forbesindia.com/multimedia/" alt="multimedia">Multimedia</a></li>
          <li><a href="http://www.forbesindia.com/forbesindiamagazine/" alt="magazines">Magazines</a></li>
        </ul>
        <ul>
        <h4><b>Help Support</b></h4>
          <li><a href="https://webright.in/#about">Abouts Us</a></li>
          <li><a href="https://webright.in/#services">Services</a></li>
          <li><a href="https://webright.in/#gallery">Work</a></li>
          <li><a href="https://webright.in/#team">Team</a></li>
          <li><a href="https://webright.in/#contact">Contact</a></li>
        </ul>
          <ul>
          <h3>Follow Us</h3>
          <li className="soc_icon">
          <a href="https://facebook.com/webright2015"><img src="https://image.flaticon.com/icons/svg/145/145802.svg" alt="facebook" width='20' height='20'/></a>
          </li>
          <li className="soc_icon">
          <a href="mailto:shany.gaurav@gmail.com" ><img src="https://image.flaticon.com/icons/svg/732/732200.svg" alt="google plus" width='20' height='20'/></a>
          </li>
          {/* <li className="soc_icon">
          <a href="abc.html" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKDhTdt_73PKM5QHmDJPY04Ej-dpfDrpAjYupiSPV7QrUljX95" alt="instagram" width='20' height='20'/></a>
          </li> */}
        </ul>
      </footer>
      
      </React.Fragment>
  );
}


