import React from 'react';
import './style.css';


 const Blog = (props)  =>{

   //var a = document.querySelectorAll('img'); for(var i=0;i<a.length;i++) { var b = a[i].src.split(':')[0]; if(b === 'http') { a[i].src = 'https://www.lonestargrapefruit.com/p/images/images.jpg'}}

    return (
      <React.Fragment>
        <div className="block">
        <div className="sharethis-inline-share-buttons"></div>
          <h1>{props.val.title}</h1>
          {props.val.urlToImage == null?<img src="https://jamaicaclassifiedonline.com/images/noimagefound.jpg" alt="NoImage"/>:<img onError={(e)=>{e.target.onerror = "https://jamaicaclassifiedonline.com/images/noimagefound.jpg"; e.target.src="https://jamaicaclassifiedonline.com/images/noimagefound.jpg"}} src={props.val.urlToImage} alt="Blogimage" width="100" height="100"/>}
          <p>{props.val.description}<span><b>- {props.val.author}</b></span><span className="readmore"><a href={props.val.url} rel="noopener noreferrer" target="_blank">Read More</a></span></p>
          <div className="social-icon">
             <a href={`https://www.facebook.com/sharer/sharer.php?u=${props.val.url}`} rel="noopener noreferrer" target="_blank"><img src="https://image.flaticon.com/icons/svg/145/145802.svg" alt="facebook"/></a>
             <a href={`https://api.whatsapp.com/send?text=${props.val.url}`} className="watsapp_logo"><img src="https://image.flaticon.com/icons/svg/733/733585.svg" alt="watsapp"/></a>
          </div>
        </div>
      </React.Fragment>
    )
  }




export default Blog;