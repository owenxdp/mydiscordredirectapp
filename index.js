const express = require("express");
const app = express();
const axios = require("axios");
const url = require("url");
let port = process.env.PORT || 3000;

app.get("/login", (req, res) => {
    const {code} = req.query;
    if (code){
        res.send(code)
    }else{
        res.redirect("https://discord.com/oauth2/authorize?client_id=1287818726942703777&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin&scope=identify");
    }
})

app.listen(port, () => {
    console.log(`App listenung on port ${3000}`);
})