const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    usertype:{
        type:String,
        default:''
    },
    courseModules:{
        type:[],
        required: function(){
            if(this.usertype === 'Student'){
                return true;
            }else{
                return false;
            }
        }
    }
})

module.exports = Users = mongoose.model('users',UserSchema);