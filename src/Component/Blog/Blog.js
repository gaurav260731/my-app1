import React from 'react';
import './style.css';


 const Blog = (props)  =>{
   console.log(props);
    return (
      <React.Fragment>
        <div className="block">
          <h1>{props.val.title}</h1>
          <img src={props.val.urlToImage} alt="Blogimage" width="100" height="100"/>
          <p>{props.val.content}<span><b>- {props.val.author}</b></span><span><a href={props.val.url} rel="noopener noreferrer" target="_blank">Read More</a></span></p>
        </div>
      </React.Fragment>
    )
  }




export default Blog;