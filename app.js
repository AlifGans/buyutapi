const express = require('express');
const getInfo = require('./ytdl.js')
const app = express();
const port = process.env.PORT || 3030;

app.set('json spaces', 2)
app.get('/ytmp4/',(req,res) => {
    const url = req.query.url;
    res.header("Content-Type",'application/json');
    if(Object.keys(req.query).length === 0) {
        res.json({error : 'Cant identifying url (ytmp4?url=youtubeurl)'});
    }
    if(url == ""){
        res.json({error : 'Fill url query'});
    }else{
        getInfo(url,info => {
            res.send(info)
        })
    }
    
})
// app.get('/ytmp4/',(req,res) => {
//     
// })
app.listen(port,()=>{
    console.log(`Server Running In http://localhost:${port}`);
})
