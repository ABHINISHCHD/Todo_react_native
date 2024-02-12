const express = require("mongoose")
const Data = require("../model/user")


const handle_all_user = async(req,res) =>{
    try{
        var tasks = await Data.find({})
        return res.json({data : tasks})
    }
    catch(err){ 
        console.log("error===============",err)
    }
}

const find_user = async(req,res) =>{
    var Id = req.params.id
    const task = await Data.findById(Id)
    return res.json({task: task})
}

const delete_user = async (req,res) =>{
    var Id = req.params.id
    const result = await Data.findByIdAndDelete(Id)
    if(result != null){
        res.json({satus:"Success"})
    }else{
        res.json({status:"Null"})
    }
}

const create_user = async(req,res) => {
    console.log("-----create use----")
    await Data.insertMany([
        {Task:req.body.tasks,Done:req.body.done}
    ]).then(()=>{
        return res.json({status: "Success"})
    }).catch((err)=>{
        return res.josn({status: error})
    })
}

const update_user = async(req,res) => {
    var Id = req.params.id
    const result = await Data.findByIdAndUpdate({_id: Id},{Task:req.body.task,Done:req.body.Done})
    if(result != null){
        res.json({satus:"Success"})
    }else{
        res.json({status:"Null"})
    }
}

module.exports = {
    handle_all_user,
    find_user,
    delete_user,
    create_user,
    update_user
}