import React, { Component } from 'react';

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
          console.log(data);
          this.setState({
            business:data.articles,
          })
        })
    }

      render() {
          const {business} = this.state;
            return(
                <section className="bitcountnews" id="businessnews">
                <p className="bitcoin">Business News</p>
             { 
                business && business.map((val, i)=>(
                    <div className="block">
                    <h1>{val.title}</h1>
                    <img src={val.urlToImage} alt="Blogimage" width="100" height="100"/>
                    <p>{val.content}<span><b>- {val.author}</b></span><span><a href={val.url} rel="noopener noreferrer" target="_blank">Read More</a></span></p>
                </div>
                ))
             }   
      </section>
                
            )
        }
    
}

export default Business;