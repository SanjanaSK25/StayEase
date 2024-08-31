if(process.env.NODE_ENV != "production"){
  require('dotenv').config();
}
const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");
const mongoAtlas = "mongodb://127.0.0.1:27017/StayEase";

main().then(()=>{console.log("connenected to mongodb Atlas...")})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoAtlas);  
}

let initDB = async ()=>{
    await Listing.deleteMany({});
    initdata.data =initdata.data.map((obj) =>({...obj,owner:'66c04157bc93c0b2eae9f894'}))
    await Listing.insertMany(initdata.data);
    console.log("data  has initialised....");
}
initDB();