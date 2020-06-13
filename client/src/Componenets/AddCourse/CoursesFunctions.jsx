import axios from 'axios';
import swal from 'sweetalert';

export const addCourse = course =>{

    return axios
    .post('api/courses/add',{
        courseCode: course.courseCode,
        enrollementKey: course.enrollementKey,
        courseName: course.courseName,
        category: course.category,
        learningHours:course.learningHours,
        licEmial:course.licEmial,
        description:course.description
    })
    .then(res =>{ })
    .catch(err =>{
       console.log(err)
       if(err.response.status === 403){
           swal({
               title: "Oops!!!",
               text: "Couese Already Exists",
               icon: "error",
               button: "true",
           })
       }
   });

}