// importing express
const express=require('express');
//creating a server
const cors=require('cors')//
const mongoose=require('mongoose');
const server=express();
server.use(cors());//

require('dotenv').config();
// configuring env file
//assign a port number
const port=6000;
const mongoURI = process.env.mongo_uri;
mongoose.connect(mongoURI)
.then(() => {
    console.log('Connected to MongoDB Atlas');
})
.catch((error) => console.error('MongoDB connection error:', error));
//creating schema
const itemSchema = new mongoose.Schema({
    name: 
    {
        type:String,
        required: true}
        ,
    price: {
        type:Number,
        required: true}

});
//model
const Item = mongoose.model('Item', itemSchema);


//middleware
server.use(express.json());
server.get('/',(req,res)=>{
    res.end("server is running");
}
);
// server.get('/product',(req,res)=>{
//     res.json(items)
// });
//fetching the data
server.get('/product', async (req, res) => {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products', error });
    }
  });


// server.post('/product',(req,res)=>{
//     newitem={id:items.length+1,name:req.body.name};
//     items.push(newitem);
//     res.status(201).json(newitem);
// });


server.post('/product', async (req, res) => {
    try {
      const newItem = new Item({
        name: req.body.name,
        price: req.body.price,
      });
      await newItem.save();
      res.status(201).json(newItem);
    } catch (error) {
      res.status(400).json({ message: 'Error saving product', error });
    }
  });
// server.put('/product/:id',(req,res)=>
// {
//     const itemid=parseInt(req.params.id);
//     const updateditem=items.findIndex((item)=>item.id===itemid);
//     if(updateditem !== -1){
//         items[updateditem].name=req.body.name;
//         res.json(items[updateditem]);
//     }
//     else{
//         res.status(404).json("item not found in data base")
//     }
// }
// );
server.put('/product/:id', async (req, res) => {
    try {
      const updatedItem = await Item.findByIdAndUpdate(
        req.params.id,
        { name: req.body.name, price: req.body.price },
        { new: true }
      );
      if (updatedItem) {
        res.json(updatedItem);
      } else {
        res.status(404).json({ message: 'Item not found' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error updating product', error });
    }
  });

// server.delete('/product/:id',(req,res)=>
// {
//     const itemid=parseInt(req.params.id);
//      const itemIndex=items.findIndex((item)=>item.id===itemid);
//      if (itemIndex !== -1) { 
//         const deletedItem = items.splice(itemIndex, 1); 
//         res.json(deletedItem);
//       } else {
//         res.status(404).send('Item not found in database');
//       }
  
//     }
//)

server.delete('/product/:id', async (req, res) => {
    try {
      const deletedItem = await Item.findByIdAndDelete(req.params.id);
      if (deletedItem) {
        res.json(deletedItem);
      } else {
        res.status(404).json({ message: 'Item not found' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error deleting product', error });
    }
  });
  
server.listen(port,()=>
    console.log(`server is running on http://localhost:${port}`)
);