const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");

//-------------------------------Mongoose Schema Imports--------------------------------------
const Course = require("../../Models/Courses");

//-------------------------------User Actions--------------------------------------------------------
// Method         : POST
// Header         : None
// Params         : None
// Body           : User Data
// Validation     : User Input Field Validations, Email Validation, two same emails dows not allow
// Return         : Added user's object (HTTP Standard status codes (200 || 400 || 500))
// Description    : Add a  new user into system
router.post('/add', (req, res) =>{

  console.log(req.body);
    const courseData = {
        courseCode: req.body.courseCode,
        enrollementKey: req.body.enrollementKey,
        courseName: req.body.courseName,
        category: req.body.category,
        learningHours:req.body.learningHours,
        licEmial:req.body.licEmial,
        description:req.body.description,
        coverphoto:req.body.coverphoto
    };

    Course.findOne({
        courseCode: req.body.courseCode
    })
    .then(course =>{
        if (course) {
            res.status(403).json({ message: "Course already registered" });
        }
        else{
        bcrypt.hash(req.body.enrollementKey, 10, (err, hash) => {
            courseData.enrollementKey = hash;
            Course.create(courseData)
              .then(()=> {                        
                res.status(200).json({'message':'Course Added Successfully'}); 
              })
              .catch(err => {
                res.status(400).json({ 'error': err });
              });
          });
        }
    })
    .catch(err=>{
        res.status(500).json({ 'error': err });
    })
});

router.get('/viewcourses',async (req,res)=>{

    try{
      let courses = await Course.find();
      if(courses){
        res.status(200).json(courses);
      }else{
        res.status(404).json({'msg':'No courses'})
      }
    }
    catch(err){
       res.status(500).json({error:'Server Error'})
    }
    
  })


  router.get('/viewcourses/:email',async (req,res)=>{

    console.log(req.params);
    try{
      let courses = await Course.find({licEmial:req.params.email});
      if(courses){
        res.status(200).json(courses);
      }else{
        res.status(404).json({'msg':'No courses'})
      }
    }
    catch(err){
       res.status(500).json({error:'Server Error'})
    }
    
  })

  router.get('/viewcourse/:courseCode',async (req,res)=>{

    try{
      let course = await Course.findOne({courseCode:req.params.courseCode});
      if(course){
        res.status(200).json(course);
      }else{
        res.status(404).json({'msg':'No courses'})
      }
    }
    catch(err){
       res.status(500).json({error:'Server Error'})
    }
    
  })


  router.get('/viewcourses',async (req,res)=>{

    try{
      let course = await Course.find();
      if(course){
        res.status(200).json(course);
      }else{
        res.status(404).json({'msg':'No courses'})
      }
    }
    catch(err){
       res.status(500).json({error:'Server Error'})
    }
    
  })


  router.post('/enroll',(req,res)=>{

    console.log(req.body)
    Course.findOne({
      courseCode: req.body.courseCode
    })
      .then(course => {
        if (course) {
          if (bcrypt.compareSync(req.body.enrollementKey, course.enrollementKey)) {

           res.status(200).json({'msg':'OK'})
  
          } else {
            res.status(400).json({ message: "Enrollement is Incorrect" });
          }
        } else {
          res.status(404).json({ message: "Course Does Not Exists" });
        }
      })
      .catch(err => {
        res.status(500).json({ error: err });
        console.log(err);
      });
})




module.exports = router;