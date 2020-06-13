const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    courseCode:{
        type:String,
        required:true
    },
    enrollementKey:{
        type:String,
        required:true
    },
    courseName:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    learningHours:{
        type:String,
        default:''
    },
    licEmial:{
        type:String
    },
    description:{
        type:String
    },
    coverphoto:{
        type:String,
        default:''
    },
    courseImageUrl:{
        type:String,
        default:''
    },
    courseImageUrlId:{
        type:String,
        default:''
    }
})

module.exports = Courses = mongoose.model('courses',CourseSchema);