import React, { Component } from 'react'
import './assets/css/styles.min.css';
import axios from 'axios';
import swal from 'sweetalert';
import Footer from './../Footer/Footer'
import AllCourses from './AllCourseList';

export default class EnrollCourse extends Component {

constructor(props){
    super(props)
    this.state={
        courseCode:'',
        enrollementKey:''
    }
}


onChangeHandler = e =>{
    this.setState({
      [e.target.name] : e.target.value
    })
}




onSubmitHandler = e =>{
    e.preventDefault()
    let enrolldata = {
        courseCode:this.state.courseCode,
        enrollementKey:this.state.enrollementKey
    }

    axios({
        method:'post',
        url:'api/courses/enroll',
        data:enrolldata
    })
    .then(() =>{
        setTimeout(()=>{
            this.getAccesstoCourse()
        },1000) 
    })
    .catch(err=>{
        if(err.response.status === 404){
            swal({
                text:'Course code does not Exsist',
                button:true,
                title:'Failed',
                icon:'error'
            })
        }else if(err.response.status === 400){
            swal({
                text:'Invalid Enrollement Key',
                button:true,
                title:'Failed',
                icon:'error'
            })
        }
   
    })
    
}

getAccesstoCourse = () =>{
    axios({
        method:'post',
        url:`/api/enrollement/enrolledCourses/${this.props.loggedEmail}/${this.state.courseCode}`
    })
    .then(res=>{
        swal({
            text:'Successfully Enrolled',
            button:true,
            title:'Done',
            icon:'success'
        })
    })
}





    render() {
        return (
                
     
<div>
        <section className="content-header" >
         
                <div className="row">
                <div className="col-md-3">
      
         

<div className="card card-primary">
      
<div className="card-header">
  <h3 className="card-title">Enroll Course</h3>
</div>

<form onSubmit={this.onSubmitHandler}>
  <div className="card-body">

    <div className="form-group">
      <label for="courseCode">Course Code</label>
      <input type="text" className="form-control" name="courseCode" id="courseCode" placeholder="Enter Course Code"
       onChange={this.onChangeHandler}
       />
    </div>


    <div className="form-group">
        <label for="enrollementKey">Enrollment Key</label>
        <input type="password" name="enrollementKey" id="enrollementKey" className="form-control" placeholder="Enter Enrollement Key" 
        onChange={this.onChangeHandler}
        />
    </div>



  

  </div>


  <div className="card-footer">
    <center><button type="submit" className="btn btn-lg btn-info btn-block">Enroll</button></center>
  </div>

</form>
</div>

              

</div>

                <div className="col-md-9">
                        <AllCourses/>
                </div>
</div>
     
        </section>

        <Footer/>

        </div>

   
        )
    }
}
