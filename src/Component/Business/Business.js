import React, { Component } from 'react';
import './style.css';

class Business extends Component{

    constructor(props) {
        super(props)
        this.state ={
            business:[],
        }
    }

    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=30b51688ea6e49eca3a9a7014ae1b9b7')
        .then(response => response.json())
        .then(data => {
          this.setState({
            business:data.articles,
          })
        })
    }

      render() {
          const {business} = this.state;
          if(business.length > 0) {
            return(
                <section className="bitcountnews" id="businessnews">
                <p className="bitcoin">Business News</p>
             { 
                business && business.map((val, i)=>(
                    <div className="block" key={i}>
                    <h1>{val.title}</h1>
                    {val.urlToImage == null?<img src="https://jamaicaclassifiedonline.com/images/noimagefound.jpg" alt="NoImage"/>:<img onError={(e)=>{e.target.onerror = "https://jamaicaclassifiedonline.com/images/noimagefound.jpg"; e.target.src="https://jamaicaclassifiedonline.com/images/noimagefound.jpg"}} src={val.urlToImage} alt="Blogimage" width="100" height="100" key={i}/>}
                    <p>{val.description}<span><b>- {val.author}</b></span><span className="readmore"><a href={val.url} rel="noopener noreferrer" target="_blank">Read More</a></span></p>
                    <div className="social-icon">
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=${val.url}`} rel="noopener noreferrer" target="_blank"><img src="https://image.flaticon.com/icons/svg/145/145802.svg" alt="facebook" className="facebook_logo"/></a>
                      <a href={`https://api.whatsapp.com/send?text=${val.url}`} className="watsapp_logo"><img src="https://image.flaticon.com/icons/svg/733/733585.svg" alt="watsapp"/></a>
                    </div>
                </div>
                ))
             }   
            </section>
                
            )
            }
            return (
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Loader" className="imageloader"/>
            )
        }
    
}

export default Business;