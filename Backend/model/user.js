const mongoose = require("mongoose")



const task = new mongoose.Schema({
    Task: {type: String,require: true},
    Done: {type: Boolean,require: true,default: false}
})

const Data = mongoose.model("Task",task)

module.exports = Data