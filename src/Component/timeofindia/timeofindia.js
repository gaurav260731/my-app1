import React from 'react';


class timeofindia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time:[],
        }
    }


    componentDidMount(country) {
        fetch('https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=30b51688ea6e49eca3a9a7014ae1b9b7')
            .then(response => response.json())
            .then(data => {
            this.setState({
                time:data.articles,
            })
        })
    }

    render() {
        const {time} = this.state;
        return(
            <section className="bitcountnews" id="googlenews">
            <p className="bitcoin">Times of India</p>
            { 
                time && time.map((val, i)=>(
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

export default timeofindia;