const express = require('express');

const textFancyGlow = require("./textpro/fancyGlow")
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
const express = require('express');
const getInfo = require('./ytdl.js')
const app = express();
const port = process.env.PORT || 3030;

app.set('json spaces', 2);
app.get("/", (req,ress) => {
    res.send("YTMP4 API https://buyutapi.herokuapp.com/ytmp4?url=youtubelink")
})
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
app.get('/textpro/fancyglow',(req,res) => {
    const text = req.query.text;
    res.header("Content-Type",'application/json');
    if(Object.keys(req.query).length === 0) {
        res.json({error : 'Example https://buyutapi.herokuapp.com/textpro/fancyglow?text=buyutapi'});
    }
    if(url == ""){
        res.json({error : 'Fill text query'});
    }else{
        textFancyGlow(text)
        .then( url => res.json({url}))
    }
})
// app.get('/ytmp4/',(req,res) => {
//     
// })
app.listen(port,()=>{
    console.log(`Server Running In http://localhost:${port}`);
})
