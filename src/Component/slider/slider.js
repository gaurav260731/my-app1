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

    render() {
        const {banner, article} = this.state;
        return(
            <div>
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
  
}

export default slider;