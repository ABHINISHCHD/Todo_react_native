const express = require("express")
const app = express()
const Data = require("./model/user")
const router = require("./routes/task")
const dbConnection = require("./config/connection")
const cors = require('cors');

const port = "3000"
// Db connection
dbConnection('mongodb://127.0.0.1:27017/test') 

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());


//Routes
app.use("/api/tasks",router)

app.listen(port,()=>{
    console.log("Established successfully")
})