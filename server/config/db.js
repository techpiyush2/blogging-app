// import  mongoose  from 'mongoose'
// import { DB_URL } from './envConfig.js'

const mongoose = require('mongoose');
const {DB_URL} = require('./envConfig')



const Connect = async () => {
    try {
       await mongoose.connect(DB_URL)
       console.log("MongoDB Connected")
  }catch(err){
      console.log(err.message);
      process.exit
  }
}


 module.exports = Connect