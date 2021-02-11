const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.Port || 9000

app.use(cors());
app.use(express.json());

app.use("/api/*",(_,res)=>{
    res.json({data:`Hello bubblegum data`})
})

app.listen(port,()=>{
    console.log(`server is alive on port:${port}`)
})

