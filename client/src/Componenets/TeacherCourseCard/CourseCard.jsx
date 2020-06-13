import React, { Component } from 'react'
import './assets/css/styles.min.css';
import axios from 'axios';
export default class CourseCard extends Component {

    constructor(props){
        super(props)

        this.state = {

            email:'',
            courses:[]
        }
    }


    componentDidMount(){
        axios({
            method:'get',
            url:`/api/courses/viewcourses/${this.props.loggedEmail}`
        })
        .then(res=>{
            this.setState({
                courses:res.data
            })
        })
    }




    render() {
        return (
                   

            <div className="photo-gallery">
<div className="container-fluid">
  <div className="px-lg-5">

    <div className="row">


{this.state.courses.map((courseDetails,index)=>(

       


    <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
    <div className="bg-white rounded shadow-sm">
      <div className="p-4">
        <h5> <a href="#" className="text-dark">{courseDetails.courseName}</a></h5>
        <p style={{fontSize:13}}className="small text-muted mb-0">{courseDetails.description}</p>
        <p style={{fontSize:15,fontFamily:'Comic Sans MS',fontWeight:'bold'}}>{courseDetails.learningHours} Learning Hours</p>
        <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
          <p style={{fontSize:16}} className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">{courseDetails.courseCode}</span></p>
          <div style={{fontSize:14}} className="badge badge-danger px-3 rounded-pill font-weight-normal">{courseDetails.category}</div>
        </div>
      </div>
    </div>
  </div>
  



))}
     

 
      </div>
 
  




    
  </div>
</div>



</div>
        )
    }
}
