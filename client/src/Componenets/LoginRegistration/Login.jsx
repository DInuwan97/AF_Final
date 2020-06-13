import React, { Component } from 'react';
import { Link, withRouter, Redirect } from "react-router-dom";
import{login} from './UserFunctions';
import Footer from '../../Componenets/Footer/Footer';
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
        firstName:'',
        lastName:'',
        email:'',
        password:''
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
      email:this.state.email,
      password:this.state.password
    }

    login(userData).then((res) => {
      if (res) {
        window.location.replace("/");
      }
    });

    setTimeout(( ()=>{
        this.setState({
            email:'',
            password:''
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
<center><h3 className="card-title">User Login</h3></center>
</div>

<form onSubmit={this.onSubmitHandler}>
<div className="card-body">


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
                             
                                <button className="btn btn-lg btn-primary btn-block">Sign In</button>
                             

                              <hr/>

                                <center>
                                <p style={{fontSize:16}}>Don't you hav an account? <Link style={{marginLeft:10}}to='/register'>Sign Up</Link></p>
                               
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
    );
  }
}
