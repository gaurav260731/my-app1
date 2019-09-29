import React, { Component } from 'react';
// import logo from './logo.svg';
import Blog from '../src/Component/Blog/Blog';
import Uses from '../src/Component/Uses/Uses';
import Header from '../src/Component/Header/Header';
import './App.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

// let dataval = [{
//   title:'Blogging',
//   content:'Blogging is a popular, rewarding, and lifestyle-friendly activity.  It seems that nowadays everyone is either a current or a prospective blogger, a pro or a hobby blogger.'
// },{
//   title:'Creator',
//   content:'Creator status attracts numerous writing professionals and laypeople alike.'
// },{
//   title:'Profilic Blogger',
//   content:'Every prolific blogger is familiar with the point in their creative writing process when the tantalizing question surfaces: “Can you make money blogging?”'
// },{
//   title:'Blogging Advantage',
//   content:'Not to dampen your enthusiasm, but keep in mind that blogging incomes may vary.'
// },{
//   title:'Keep in Mind',
//   content:'Mind you, these figures are not for full-time blogging. If you aim at blogging as a full-time activity, your results may differ.'
// },{
//   title:'How to make money with a blog',
//   content:'It is probable that an average blog creator doesn’t think about blogging for money, at least initially. However, later on in the process as their blog evolves into a crowded platform for social communication, the blogger is frequented by the prodding thought: “Why not to undertake monetizing your blog?”'
// }];

let uses = [{
  title:'Blog Useful',
  percentage_value: 250
},
{
  title: 'Blog Purpose',
  percentage_value: 350
},
{
  title:'Blog Ideas',
  percentage_value: 850
}];

let header = [{
  title:'Home'
},
{
  title:'About Us'
},
{
  title:'Blog'
},
{
  title:'Contact Us'
}]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      article:[],
      country:'in',
      banner:[],
    }

    this.handleChange = this.handleChange.bind(this);
    //this.handlePrint = this.handlePrint.bind(this);
  }

  handleChange(e) {
    this.setState({ country: e.target.value });
    this.componentDidMount(e.target.value);

  }

  componentDidMount(country) {
    if(country === undefined) {
      country = 'in'
    }

    fetch('https://newsapi.org/v2/top-headlines?country='+country+'&apiKey=30b51688ea6e49eca3a9a7014ae1b9b7')
    .then(response => response.json())
    .then(data => {
      this.setState({
        article:data.articles,
      })
          
    })

    fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=30b51688ea6e49eca3a9a7014ae1b9b7')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        banner:data.articles,
      })
    })
  }

  // componentWillUpdate(country) {
  //   fetch('https://newsapi.org/v2/top-headlines?country='+country+'&apiKey=30b51688ea6e49eca3a9a7014ae1b9b7')
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({
  //       article:data.articles,
  //     })
  //     console.log(data);     
  //   })
  // }

 render() {
  const { article, banner } = this.state;
  return (
    <React.Fragment>
      <header className="menu-container">
        {
          header.map((val, i) => (
            <Header val = {val} key = {i}/>
          ))
        }
       
         <select onChange={this.handleChange} >
         <option value="in">India</option>
         <option value="us">US</option>
         <option value="fr">France</option>
         </select>
       
      </header>

      {/* <div className="imagediv">
        <div className="bannerover">
          <h1>Read the blog to get more ideas, about different technologies.</h1>
          <button className="readblog">Read Blog</button>
        </div>
      </div> */}

  
    <AwesomeSlider className ="imagestyle">
  {      
          banner && banner.map((val, i)=>(
            <div>
             <img src={val.urlToImage} key = {i} alt="slider-img" className="imageslider"/>
             <p className="sliderpara">{val.description}</p>
             <button className="sliderRead"><a href={val.url} target="_blank" rel="noopener noreferrer">Read More</a></button>
             </div>
          ))      
        }
    
  </AwesomeSlider>

  


      <section id="aboutus">
      <nav className="aboutus">
        <h1>Uses of Blogs</h1>
        {
          uses.map((val, i) => (
            <Uses val = {val} key = {i}/>
          ))
        }
        
      </nav>

      <article>
        <h1>About Cities</h1>
        <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
        <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
      </article>
      </section>

      <section id="blog">
        {      
          article && article.map((val, i)=>(
            <Blog val= {val} key = {i}/>
          ))      
        }
      </section>
  
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
}

export default App;
