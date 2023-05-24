const express = require("express")
const mongoose = require("mongoose")
const db=mongoose.connection;

mongoose.connect("mongodb://0.0.0.0:27017/testdb", {
  useNewUrlParser: "true",
  useUnifiedTopology:"true"
})
 
db.on("error", err => {
  console.log("err", err)
})

db.once('open', () => {
  console.log("mongoose is connected")
})

module.exports=db;