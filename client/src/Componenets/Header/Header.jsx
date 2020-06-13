import React, { Component } from 'react'
import Avatar from 'react-avatar';
import jwt_decode from "jwt-decode";
import axios from 'axios';

import { Link, withRouter, Redirect } from "react-router-dom";
export default class Header extends Component {

  constructor(props) {
    super(props);

     this.state = {
      courses:[]
     }
  }

  

  


  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("userLoginToken");  
    setTimeout(()=>{
      window.location.replace("/login");
    },50)

  }


    render() {

const loginLink = (
  <ul className="navbar-nav">
  <li className="nav-item dropdown" style={{float:'right'}}>
        
  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <Avatar name={this.props.firstName + " " + this.props.lastName} round="50%" size='35'/> Hello {this.props.firstName}
  </a>
  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    <a className="dropdown-item" href="#">Profile</a>
    <a className="dropdown-item" href="#">{this.props.usertype}</a>
    <a className="dropdown-item" href="#">Settings</a>
    <a className="dropdown-item" onClick={this.logOut.bind(this)}>Logout</a>
  </div>

</li>
</ul>
  
)

const userLink = (
  <ul className="navbar-nav">

     <li className="nav-item" style={{float:'right'}}>
        <Link className="nav-link" to='/login'>Singn In</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to='/register'>Sign Up</Link>
      </li>


  </ul>
 
)

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to='/' className="navbar-brand" href="#">COURSE FIRST</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>

    

      
     {(this.props.usertype === 'Student' && localStorage.userLoginToken !== null)&&
        <li className="nav-item">
         <Link to='/myenroll' className="nav-link">Enrolled Courses</Link>
        </li>
      }

    {(this.props.usertype === 'Student' && localStorage.userLoginToken !== null)&&
        <li className="nav-item">
         <Link to='/enroll' className="nav-link">Enroll New</Link>
        </li>
      }

      {(this.props.usertype === 'Admin' && localStorage.userLoginToken !== null)&&
      <li className="nav-item">
        <Link to='/addCourse' className="nav-link">Add Courses</Link>
      </li>
      }


 

  {(this.props.usertype === 'Teacher' && localStorage.userLoginToken !== null)&&
    <li className="nav-item">
      <Link to='/teachersCourse' className="nav-link">Courses Details</Link>
    </li>
  }

    </ul>
  </div>


 
  {localStorage.userLoginToken ? loginLink : userLink}



</nav>
        )
    }
}
