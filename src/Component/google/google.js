import React from 'react';
import './style.css';


class google extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            google:[],
        }
    }


    componentDidMount(country) {
        fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=30b51688ea6e49eca3a9a7014ae1b9b7')
        .then(response => response.json())
        .then(data => {
          this.setState({
            google:data.articles,
          })
        })
    }

    render() {
        const {google } = this.state;
        if(google.length > 0) {
          return(
            <section className="bitcountnews" id="googlenews">
        <p className="bitcoin">Google News</p>
      { 
        google && google.map((val, i)=>(
          <div className="block" key={i}>
            <h1>{val.title}</h1>
            {val.urlToImage == null?<img src="https://jamaicaclassifiedonline.com/images/noimagefound.jpg" alt="NoImage"/>:<img onError={(e)=>{e.target.onerror = "https://jamaicaclassifiedonline.com/images/noimagefound.jpg"; e.target.src="https://jamaicaclassifiedonline.com/images/noimagefound.jpg"}} src={val.urlToImage} alt="Blogimage" width="100" height="100" key={i}/>} 
            <p>{val.description}<span><b>- {val.author}</b></span><span className="readmore"><a href={val.url} rel="noopener noreferrer" target="_blank" key={i}>Read More</a></span></p>
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

export default google;