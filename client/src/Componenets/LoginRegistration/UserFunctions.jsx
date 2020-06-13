import axios from 'axios';
import swal from 'sweetalert';

export const register = user =>{
    return axios
    .post('api/users/register',{
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        password:user.password,
        usertype:user.usertype
    })
    .then(res =>{
        if(res.data != null){
                swal({
                    title: "Done",
                    text: "Registered Successfully",
                    icon: "success",
                    button: true,
                })
           return res.data
       }
   })
   .catch(err =>{
       console.log(err)
       if(err.response.status === 403){
           swal({
               title: "Oops!!!",
               text: "User Email Already Exists",
               icon: "error",
               button: "Back to Login",
           })
       }
   });
}

export const login = user =>{
    return axios
    .post('api/users/login',{
        email:user.email,
        password:user.password
    })
    .then(res=>{
        localStorage.setItem('userLoginToken',res.data.token); //create the login session
        return res.data.token
    })
    .catch(err =>{
        if(err.response.status === 400){
            swal({
                title: "Oops!!!",
                text: "Your Password is Incorrect",
                icon: "error",
                button: true,
            })
        }
        else if(err.response.status === 404){
            swal({
                title: "Oops!!!",
                text: "User Does not Exist in the System",
                icon: "error",
                button: true,
            })
        }
    })
}