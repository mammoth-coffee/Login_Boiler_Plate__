const express = require('express');
const app = express();
const port = 5000;


const mongoose = require('mongoose');
mongoose.connect('mongodb://seungil:seungil@ac-ar17brm-shard-00-00.7udgsq7.mongodb.net:27017,ac-ar17brm-shard-00-01.7udgsq7.mongodb.net:27017,ac-ar17brm-shard-00-02.7udgsq7.mongodb.net:27017/?ssl=true&replicaSet=atlas-12792y-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true    
}).then(() => console.log('mongoDB Connected..'))
.catch((err) => console.log(err))











app.get('/', (req, res) => {
    res.send('HELLO World')
});

app.listen(port, () => {
    console.log(`Exmaple app listening on port ${port}`);
});

