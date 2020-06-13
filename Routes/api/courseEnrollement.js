const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


//-------------------------------Mongoose Schema Imports--------------------------------------
const CourseEnrollement = require("../../Models/CourseEnrollement");
const Course = require("../../Models/Courses");
const User = require("../../Models/Users");

router.post('/enrolledCourses/:email/:courseCode',async (req,res)=>{
    console.log(req.body);

    try{

        let course = await Course.findOne({courseCode:req.params.courseCode})  
        let user = await User.findOne({email:req.params.email})

        setTimeout(()=>{
            if(course && user){
                const frmData = {
                    courseCode:req.params.courseCode,
                    email:req.params.email,
                    isEnroled:req.body.isEnrolled
                };
                
                CourseEnrollement.create(frmData)
                .then(()=>{
                    res.status(200).json({'message':'Enrolled Successfully'})
                })
                .catch(err => {
                  res.status(400).json({ 'error': err });
                });
            }else{
            
                res.status(404).json({ 'msg': 'No match Fond' });
            }
    
        },1000)
  


    }catch(err){
        res.status(500).json({ 'error': err });
    }

})


router.get('/enrolledCourses/:email',async (req,res)=>{

    try{
        let course = await CourseEnrollement.find({email:req.params.email});
        if(!course){
            res.status(404).json({'msg':'No Enrolled Courses'})
        }else{
            res.status(200).json(course)
        }
    }catch(err){
        res.status(500).json({err})
    }


})

module.exports = router;