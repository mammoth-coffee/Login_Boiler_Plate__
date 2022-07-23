const express = require('express');
const app = express();
const port = 5000;

const config = require('./config/key.js')

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true    
}).then(() => console.log('mongoDB Connected..'))
.catch((err) => console.log(err))

const { User } = require('./models/Users');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));  // application/x-www-form-urlencoded 이렇게 된 데이터를 분석해서 가져올 수 있게 해줌
app.use(bodyParser.json()); // application/json 타입을 분석해서 가져올 수 있게 해줌

// Register Router

app.post('/register', (req, res) => {

    // 회원가입할 떄 필요한 정보들을 client에서 가져오면 그것들을 db에 넣어준다.
    // userModel을 가져와야함.

    const user = new User(req.body);

    user.save((err, userInfo) => {
        if(err) return res.json({success : false, err})
        return res.status(200).json({
            success : true
        })
    })
})








app.get('/', (req, res) => {
    res.send('HELLO World')
});

app.listen(port, () => {
    console.log(`Exmaple app listening on port ${port}`);
});

