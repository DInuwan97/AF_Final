import React, { Component } from 'react'
import { Link, withRouter, Redirect } from "react-router-dom";
import {register} from './UserFunctions';
import axios from "axios";
import Footer from '../../Componenets/Footer/Footer';

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            usertype:''
        }
    }
    onChangeHandler = e =>{
        this.setState({
          [e.target.name] : e.target.value
        })
    }

    onSubmitHandler = e =>{
        e.preventDefault()
        const userData = {
          firstName:this.state.firstName,
          lastName:this.state.lastName,
          email:this.state.email,
          password:this.state.password,
          usertype:this.state.usertype    
        }

        register(userData);

        setTimeout(( ()=>{
            this.setState({
                firstName:'',
                lastName:'',
                email:'',
                password:'',
                usertype:''
            })
        }),1000)
    
    }


    render() {
        return (
      
<div>
            <section className="content-header">
            <div className="container-fluid">
      
             
          <div className="row">
          <div className="col-md-3 mt-5 mx-auto">

      <div className="card card-primary">
            
      <div className="card-header">
        <h3 className="card-title"><center>User Registration</center></h3>
      </div>

      <form onSubmit={this.onSubmitHandler}>
      <div className="card-body">
                                  <div className="form-group">
                                      <label htmlFor="firstName" style={{fontSize:15,fontFamily:'arial',fontWeight:'bold'}}> First Name </label>
  
                                      <input 
                                          type="text" 
                                          className="form-control"
                                          name="firstName" 
                                          placeholder="Enter First Name" 
                                          id="firstName"
                                          onChange={this.onChangeHandler}
                                          value={this.state.firstName}
                                           />
                                      
                                  </div> 
                                         
                          
                                  <div className="form-group">
                                      <label htmlFor="lastName" style={{fontSize:15,fontFamily:'arial',fontWeight:'bold'}}> Last Name </label>
  
                                      <input 
                                          type="text" 
                                          style={{paddingLeft:10,paddingRight:10}}
                                          className="form-control"
                                          name="lastName" 
                                          placeholder="Enter Last Name" 
                                          id="lastName"
                                          onChange={this.onChangeHandler}
                                          value={this.state.lastName}
                                           />
                                      
                                  </div> 
                         
                                  <div className="form-group">
                                      <label htmlFor="email" style={{fontSize:15,fontFamily:'arial',fontWeight:'bold'}}> Email Address </label>
  
                                      <input 
                                          type="email" 
                                          className="form-control"
                                          name="email" 
                                          placeholder="Enter Email" 
                                          id="email"
                                          onChange={this.onChangeHandler}
                                          value={this.state.email}
                                           />
                                      
                                  </div>   
                                
                                  <div className="form-group">
                                      <label htmlFor="usertype" style={{fontSize:15,fontFamily:'arial',fontWeight:'bold'}}> User Type </label>

                                            
                                      <select
                                       id="usertype"
                                       className="form-control"
                                    
                                       name="usertype"
                                       required=""
                                       onChange={this.onChangeHandler}
                                       >
                                       <option value="">Select User Type</option>                     
                                       <option value="Teacher">Teacher</option>
                                       <option value="Student">Student</option>
                                       <option value="Admin">Admin</option>
                                       </select>
                                    
                                  </div>
                               
                                  <div className="form-group">
                                      <label htmlFor="password" style={{fontSize:15,fontFamily:'arial',fontWeight:'bold'}}> Password </label>
  
                                      <input 
                                          type="password" 
                                          className="form-control"
                                          name="password" 
                                          placeholder="Enter Password" 
                                          id="password"
                                          onChange={this.onChangeHandler}
                                          value={this.state.password}
                                           />
  
                                  </div>
                                 


                                  
                                    <button className="btn btn-lg btn-primary btn-block">Sign Up</button>
                                 

                                  <hr/>

                                    <center>
                                    <p style={{fontSize:16}}>Already have an account? <Link style={{marginLeft:10}}to='/login'>Sign In</Link></p>
                                   
                                    </center>
                                    </div>

      </form>
    </div>

    </div>



                    



    </div>





    </div>
    </section>

    <Footer/>
        
    </div>   
        )
    }
}
