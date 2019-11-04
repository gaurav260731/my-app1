import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import Blog from '../Blog/Blog';

class slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banner:[],
            articles:[],
            country:'in',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ country: e.target.value });
        this.componentDidMount(e.target.value);
    
      }

    componentDidMount(country) {
        //const {country} = this.state;
        if(country === undefined) {
            country = 'in'
          }
      
          fetch('https://newsapi.org/v2/top-headlines?country=au&category=science&apiKey=30b51688ea6e49eca3a9a7014ae1b9b7')
          .then(response => response.json())
          .then(data => {
            this.setState({
              article:data.articles,
            })
                
          })
        fetch('https://newsapi.org/v2/top-headlines?country=au&category=sports&apiKey=30b51688ea6e49eca3a9a7014ae1b9b7')
            .then(response => response.json())
            .then(data => {
            this.setState({
                banner:data.articles,
            })
            })
    }

    render() {
        const {banner, article} = this.state;
        if(banner.length > 0 ) {
        return(
            <div>
            <AwesomeSlider className ="imagestyle">
             {      
                  banner && banner.map((val, i)=>(
                    <div key = {i}>
                     {val.urlToImage == null?<img src="https://jamaicaclassifiedonline.com/images/noimagefound.jpg" alt="NoImage"/>:<img onError={(e)=>{e.target.onerror = "https://jamaicaclassifiedonline.com/images/noimagefound.jpg"; e.target.src="https://jamaicaclassifiedonline.com/images/noimagefound.jpg"}} src={val.urlToImage} alt="Blogimage" width="100" height="100" key={i} className="imageslider"/>}
                     <p className="sliderpara">{val.description}</p>
                     <button className="sliderRead"><a href={val.url} target="_blank" rel="noopener noreferrer">Read More</a></button>
                     </div>
                  ))      
                }  
          </AwesomeSlider>
          <section id="worldnews" >
          <p className="worldnews">World News</p>      
            {      
              article && article.map((val, i)=>(
                <Blog val= {val} key = {i}/>
              ))      
            }
            
          </section>
          </div>
          )
        }
        return (
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Loader" className="imageloader"/>
        )
    }
  
}

export default slider;