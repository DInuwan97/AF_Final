import React, { Component } from 'react'
import axios from 'axios';
import { addCourse } from './CoursesFunctions';
import CourseList from './CourseList'; 
import Footer from './../Footer/Footer'
export default class AddNewCourse extends Component {


    constructor(props) {
        super(props);
        this.state = {
            courseCode: '',
            enrollementKey: '',
            courseName: '',
            category: '',
            learningHours:'',
            licEmial:'',
            description:'',

            userEmails:[],
            courses:[]
        }

    }


    componentDidMount(){
        axios({
            method:'get',
            url:'/api/users/viewteachers'
        })
        .then(res=>{

            this.setState({
                userEmails:res.data
            })
        })

        axios({
            method:'get',
            url:'/api/courses/viewcourses'
        })
        .then(res=>{
            this.setState({
                courses:res.data
            })
        })
    }


    onChangeHandler = e =>{
        this.setState({
          [e.target.name] : e.target.value
        })
    }

    onSubmitHandler = e =>{
        e.preventDefault()
        const courseData = {
            courseCode: this.state.courseCode,
            enrollementKey: this.state.enrollementKey,
            courseName: this.state.courseName,
            category: this.state.category,
            learningHours:this.state.learningHours,
            licEmial:this.state.licEmial,
            description:this.state.description
        }

        addCourse(courseData);

    setTimeout(()=>{
            
        let formData = new FormData();
        formData.append("image", this.state.courseImageUrl);
        axios({
            method: "patch",
            url: `/api/courses/updateImage/${this.state.courseCode}`,
            data: formData,
        })
        .then((res) => {})
        .catch((err) => {});

    },1000)

        this.setState({
            courses:[...this.state.courses,courseData]
        })
        setTimeout(( ()=>{
            this.setState({
                courseCode: '',
                enrollementKey: '',
                courseName: '',
                category: '',
                learningHours:'',
                licEmial:'',
                description:''
            })
        }),1000)
    
    }




    render() {


    

        return (

         

            <div>
            <section className="content-header">
              <div className="container-fluid">
        
               
            <div className="row">
            <div className="col-md-4">

        <div className="card card-primary">
              
        <div className="card-header">
          <h3 className="card-title">Enter Course Data</h3>
        </div>
  
        <form onSubmit={this.onSubmitHandler}>
          <div className="card-body">

            <div className="form-group">
              <label for="courseName">Course Name</label>
              <input type="text" className="form-control" name="courseName" id="courseName" placeholder="Enter Course Name"
               onChange={this.onChangeHandler}
               value={this.state.courseName}
               />
            </div>


            <div className="row">
                <div className="col">
                    <div className="form-group">
                     <label for="courseCode">Course Code</label>
                     <input type="text" className="form-control" name="courseCode" id="courseCode" placeholder="Enter Course Name"
                      onChange={this.onChangeHandler}
                      value={this.state.courseCode}
                      />
                    </div>
                </div>

                <div className="col">
                    <div className="form-group">
                     <label for="enrollementKey">Enrollement Key</label>
                     <input type="text" className="form-control" name="enrollementKey" id="enrollementKey" placeholder="Enter Course Name"
                      onChange={this.onChangeHandler}
                      value={this.state.enrollementKey}
                      />
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col">
                    <div className="form-group">
                     <label for="category">Category</label>
                             
                                    <select
                                       id="category"
                                       className="form-control"
                                    
                                       name="category"
                                       required=""
                                       onChange={this.onChangeHandler}
                                       >
                                       <option value="">Select Course Category</option>                     
                                       <option value="Cyber Security">Cyber Security</option>
                                       <option value="Software Engineering">Software Engineering</option>
                                       <option value="Data Science">Data Science</option>
                                    </select>
                </div>
                </div>

                <div className="col">
                    <div className="form-group">
                     <label for="learningHours">Learning Hours</label>
                     <input type="text" className="form-control" name="learningHours" id="learningHours" placeholder="Enter Learning Hours"
                      onChange={this.onChangeHandler}
                      value={this.state.learningHours}
                      />
                    </div>
                </div>
            </div>



            <div className="form-group">
                     <label for="licEmial">Lecture In Charge</label>
                     <select name="licEmial" id="licEmial" onChange={this.onChangeHandler} className="form-control" style={{width: '100%'}}>
                        
                     <option value="">Select LIC</option>      
                     {this.state.userEmails.map((users, index) => (
                      <option key={index} value={users.email} >
                        {users.email} : {users.firstName} {users.lastName}
                      </option>
                     ))}
                
                    </select>
            </div>
           

            <div className="form-group">
                <label for="description">Course Description</label>
                <textarea name="description" id="description" className="form-control" rows="3" placeholder="Enter Description ..." 
                onChange={this.onChangeHandler}
                value={this.state.description}
                ></textarea>
            </div>


        

          
      
          </div>


          <div className="card-footer">
            <button type="submit" className="btn btn-success">Submit</button>
          </div>

        </form>
      </div>

      </div>



                        <CourseList courses = {this.state.courses}/>




      </div>





      </div>
      </section>
      
          
                        <Footer/>
      

                        </div>

        )
    }
}
