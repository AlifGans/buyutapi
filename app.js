const express = require('express');

const textFancyGlow = require("./textpro/fancyGlow")
const getInfo = require('./ytdl.js')
const app = express();
const port = process.env.PORT || 3030;

app.set('json spaces', 2)

app.get('/',(req,res) => {
    res.send(`1.YTMP4 https://buyutapi.herokuapp.com/ytmp4?url=ytlink<br>2.Textpro Fancy Gloow https://buyutapi.herokuapp.com/textpro/fancyglow?text=buyutapi`)
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
// app.get('/ytmp4/',(req,res) => {
//     
// })
app.get('/textpro/fancyglow',(req,res) => {
    const text = req.query.text;
    res.header("Content-Type",'application/json');
    if(Object.keys(req.query).length === 0) {
        res.json({error : 'Example https://buyutapi.herokuapp.com/textpro/fancyglow?text=buyutapi'});
    }
    if(text == ""){
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
