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
        fetch('https://server.quoteslifetime.com/v1/content/readN?tags=Motivational&page=1&limit=14')
        .then(response => response.json())
        .then(data => {
          this.setState({
            business:data.Result,
          })
        })
    }

      render() {
          const {business} = this.state;
          if(business.length > 0) {
            return(
                <section className="bitcountnews" id="businessnews">
                <p className="bitcoin">Quotes of the Day</p>
             { 
                business && business.map((val, i)=>(
                    <div className="block" key={i}>
                    <img src={val.sourceLink} alt="quotes"/>
                    <p>{val.supportText}</p>
                    <div className="social-icon">
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=${val.sourceLink}`} rel="noopener noreferrer" target="_blank"><img src="https://image.flaticon.com/icons/svg/145/145802.svg" alt="facebook" className="facebook_logo"/></a>
                      <a href={`https://api.whatsapp.com/send?text=${val.supportText}`} className="watsapp_logo"><img src="https://image.flaticon.com/icons/svg/733/733585.svg" alt="watsapp"/></a>
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