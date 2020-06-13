const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseEnrollementSchema = new Schema({

    courseCode:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    isEnroled:{
        type:Boolean,
        default:true 
    },
    accessDate:{
        type:Date,
        default:Date.now
    }

})


module.exports = CourseEnrollement = mongoose.model('enrollement',CourseEnrollementSchema);