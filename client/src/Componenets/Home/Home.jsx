import React, { Component } from 'react';
import Footer from '../../Componenets/Footer/Footer';
import './assets/css/styles.min.css'
export default class Home extends Component {
  render() {
    return (
        <div>

<div>
       
        <div class="header-blue">
            <nav class="navbar navbar-light navbar-expand-md navigation-clean-search">
                <div class="container-fluid"><button class="navbar-toggler" data-toggle="collapse"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button></div>
            </nav>
            <div class="container hero">
                <div class="row">
                
                    <div class="col-md-4">
                        <h1>The Educational Revolution is here.</h1>
                        <p>Mauris egestas tellus non ex condimentum, ac ullamcorper sapien dictum. Nam consequat neque quis sapien viverra convallis. In non tempus lorem. </p><button class="btn btn-light btn-lg action-button" type="button">Learn More</button>
                        
                        </div>
                   
                    <div class="col-md-8">
                    
                        <div className="iphone-mockup">
         
                            <img  style={{marginTop:0}}src="https://dinuwankalubowilaportfolio.000webhostapp.com/FeedCX/img/welcome-img.png"/>
                           
                        </div>
                
                    </div>
                </div>
            </div>
        </div>
    
    </div>
        
            
        
            <Footer/>
                </div>
    );
  }
}

