import React, { Component } from 'react'
import jwt_decode from "jwt-decode";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Componenets/Header/Header';
import Register from './Componenets/LoginRegistration/Register';
import Login from './Componenets/LoginRegistration/Login';
import AddCourse from './Componenets/AddCourse/AddNewCourse';
import TeacherCourseCard from './Componenets/TeacherCourseCard/CourseCard';
import EnrollCourse from './Componenets/StudentCourseEnroll/EnrollCourse';

import MyEnrolledCourses from './Componenets/StudentCourses/StudentCourseCard';
import Home from './Componenets/Home/Home'
export default class App extends Component  {

  constructor(props) {
    super(props);
    this.state = {
        firstName:'',
        lastName:'',
        email:'',
        usertype:''
    }
  }

  componentDidMount(){
    if (localStorage.getItem("userLoginToken") !== null) {

      const token = localStorage.userLoginToken;
      const decoded = jwt_decode(token);
      this.setState({
        firstName: decoded.firstName,
        lastName: decoded.lastName,
        email: decoded.email,
        usertype:decoded.usertype 
      });
    }
  }


  render(){
  return (
    <Router>
      <div className="App">

            <Header firstName={this.state.firstName} lastName={this.state.lastName} loggedEmail={this.state.email} usertype={this.state.usertype}/>
       
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/addCourse" component={AddCourse} />
            <Route path="/teachersCourse" component={()=> <TeacherCourseCard loggedEmail={this.state.email} />} />
            <Route path="/enroll" component={() => <EnrollCourse loggedEmail={this.state.email}/>} />

            <Route path="/myenroll" component={() => < MyEnrolledCourses loggedEmail={this.state.email}/>} />

         
            </Switch>
          
          
      </div>
    </Router>
  )
  }
}


