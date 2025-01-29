const express=require(`express`);
const server=express();
const {MongoCryptCreateEncryptedCollectionError}=require('mongodb');
const mongoose = require('mongoose');

require('dotenv').config()


const mongo_uri=process.env.mongo_uri;

mongoose.connect(mongo_uri)
.then(()=>{
    console.log("mongodb connected");
}) 
.catch(error=>{
    console.log("Error ocuured")
})

const schema1=new mongoose.schema({
    name:{
        type:String,
        required:true
    },

    item:{
        type:String,
        required:true
    }
})

const item=mongoose.model('item',schema1);