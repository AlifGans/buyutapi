const express = require('express');

const textPro = require("./textpro/textPro1val.js");
const textPro2 = require("./textpro/textPro2val.js");
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

// fancyglow textpro
app.get('/textpro/fancyglow',(req,res) => {
    const text = req.query.text0;
    const url = "https://textpro.me/free-advanced-glow-text-effect-873.html"
    res.header("Content-Type",'application/json');
    if(Object.keys(req.query).length === 0) {
        res.json({error : 'Example https://buyutapi.herokuapp.com/textpro/fancyglow?text0=buyutapi'});
    }
    if(text == ""){
        res.json({error : 'Fill text query'});
    }else{
        textPro(url,text)
        .then( url => res.json({url}))
    }
})
// Pornhub textpro
app.get('/textpro/pornhub',(req,res) => {
    const text = [req.query.text0,req.query.text1];
    const url = "https://textpro.me/pornhub-style-logo-online-generator-free-977.html";

    res.header("Content-Type",'application/json');
    if(Object.keys(req.query).length === 0) {
        res.json({error : 'Example https://buyutapi.herokuapp.com/textpro/pornhub?text0=buyut&text1=api'});
    }
    if(text.length == 0){
        res.json({error : 'Example https://buyutapi.herokuapp.com/textpro/pornhub?text0=buyut&text1=api'});
    }else{
        textPro2(url,text)
        .then( url => res.json({url}))
    }
})
// Glitch textpro
app.get('/textpro/glitch',(req,res) => {
    const text = [req.query.text0,req.query.text1];
    const url = "https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html";

    res.header("Content-Type",'application/json');
    if(Object.keys(req.query).length === 0) {
        res.json({error : 'Example https://buyutapi.herokuapp.com/textpro/glitch?text0=buyut&text1=api'});
    }
    if(text.length == 0){
        res.json({error : 'Example https://buyutapi.herokuapp.com/textpro/glitch?text0=buyut&text1=api'});
    }else{
        textPro2(url,text)
        .then( url => res.json({url}))
    }
})

// app.get('/ytmp4/',(req,res) => {
//     
// })
app.listen(port,()=>{
    console.log(`Server Running In http://localhost:${port}`);
})
