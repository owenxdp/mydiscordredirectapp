const express = require("express");
const app = express();
let port = process.env.PORT || 3000;

app.get("/api/auth/discord/redirect", (req, res) => {
    res.send(req.query);
})

app.listen(port, () => {
    console.log(`Example app listenung on port ${3000}`);
})