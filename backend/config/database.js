const mongoose = require("mongoose");

const connectDatabase = async() => {
  //connecting to the database

  await mongoose.connect(process.env.DB_URI).then(() => {
    console.log("server connected sucessfuly");
  }).catch((error)=>{
    console.log("can not connect to server")
    console.log(error.message)
  });
};

module.exports = connectDatabase;
