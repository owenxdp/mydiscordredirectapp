const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
let usercode = undefined;

app.get("/login", (req, res) => {
    const {code} = req.query;
    if (code){
        usercode = req.query;
    }
    res.redirect("/getcode");
    setTimeout(function(){
        usercode = undefined;
    },1000);
})

app.get("/getcode", (req, res) => {
    res.send(usercode);
})

app.listen(port, () => {
    console.log(`App listenung on port ${3000}`);
})