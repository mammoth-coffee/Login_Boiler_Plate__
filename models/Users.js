const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxlength : 50
    },
    email : {
        type : String,
        trim : true,
        unique : 1
    },
    password : {
        type : String,
        minlength : 4
    },
    lastname : {
        type : String,
        maxlength : 50
    },
    role : {
        type : Number,
        default : 0
    },
    image : String,
    token : {
        type : String
    },
    tokenExp : {
        type : Number
    }
})


// 스키마를 모델로 감싸줌

const User = mongoose.model("User", userSchema);

// 보시면 export default로 되는건 그냥 User 이런식으로 되고 
// 그냥 export 로 되는건 { User } 이런식으로 가져오셔야 됩니다 ^^ 
// 그리고 export default는 한 파일에 한가지밖에 못합니다 ~ ! 

module.export = { User };