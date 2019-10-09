import React from 'react';


class google extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            google:[],
        }
    }


    componentDidMount(country) {
        fetch('https://newsapi.org/v2/top-headlines?sources=google-news-fr&apiKey=30b51688ea6e49eca3a9a7014ae1b9b7')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.setState({
            google:data.articles,
          })
        })
    }

    render() {
        const {google } = this.state;
        return(
            <section className="bitcountnews" id="googlenews">
        <p className="bitcoin">Google News</p>
      { 
        google && google.map((val, i)=>(
          <div className="block">
            <h1>{val.title}</h1>
            <img src={val.urlToImage} alt="Blogimage" width="100" height="100"/>
            <p>{val.content}<span><b>- {val.author}</b></span><span><a href={val.url} rel="noopener noreferrer" target="_blank" key={i}>Read More</a></span></p>
         </div>
        ))
      }   
      </section>
          )
    }
  
}

export default google;