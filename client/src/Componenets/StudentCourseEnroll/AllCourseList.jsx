import React, { Component } from 'react'
import axios from 'axios';
import AllCourseListRow from './AllCourseListRow';
const $ = require('jquery');
$.DataTable = require('datatables.net');


export default class AllCourseList extends Component {

    constructor(props){
        super(props);
        this.state = {
            courses:[]
        }
    }

    componentDidUpdate(){
        $('#userlist-table').DataTable()
    }

    componentDidMount(){
       

        axios({
            method:'get',
            url:'http://localhost:5000/api/courses/viewcourses'
        })
        .then((res)=>{
            this.setState({
                courses:res.data
            })
        })
    }

 

    
    
    render() {
        return (
           
            
                  
                
                <div className="card card-warning">
            <div className="card-header">
              <h3 className="card-title">Current Courses</h3>
            </div>
           
            <div className="card-body">

              <table id="userlist-table" className="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Course Code</th>
                  <th>Course Name</th>
                  <th>Category</th>
                  <th>LIC</th>
                  <th>Learning Hours</th>
                </tr>
                </thead>

                <tbody>

                    {this.state.courses.map( (courseDetails,index) =>(
                        <AllCourseListRow course={courseDetails}/>
                    ))}
    

                </tbody>

</table>
</div>

</div>




               
        )
    }
}
