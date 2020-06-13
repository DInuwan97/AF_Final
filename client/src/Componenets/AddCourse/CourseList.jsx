import React, { Component } from 'react'
import axios from 'axios';
import CourseListRow from './CourseListRows';
const $ = require('jquery');
$.DataTable = require('datatables.net');


export default class CourseList extends Component {

   
    componentDidUpdate(){

        setTimeout(()=>{
            $('#userlist-table').DataTable()
        },1000)
    
    }


    render() {
        return (
           
            
                    <div className="col-md-8">
                
                <div className="card card-info">
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
                  <th>Actions</th>
                </tr>
                </thead>

                <tbody>

                    {this.props.courses.map( (courseDetails,index) =>(

                        
                        <CourseListRow course={courseDetails} />
                    ))}
    

                </tbody>

</table>
</div>

</div>




                    </div>
         
        )
    }
}
