const express = require('express');
const server = express();

server.use(express.json());


const items = [
    
        { "id": 1, "name": "item1" },
        { "id": 2, "name": "item2" }
    
];
 

server.get('/', (req, res) => {
    res.end("server is running");
});


server.get('/about', (req, res) => {
    res.end("server11 is running");
});


server.post('/', (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({ error: "Name is required" });
    }
    const newItem = { id: items.length + 1, name: req.body.name };
    items.push(newItem);
    res.status(200).json(newItem);
});




server.put('/:id', (req, res) => {
    const itemId = parseInt(req.params.id); 
    const itemIndex = items.findIndex((item) => item.id === itemId); 

    if (itemIndex !== -1) {

        if (!req.body.name) {
            return res.status(400).json({ error: "Name is required to update the item." });
        }

        items[itemIndex].name = req.body.name;
        res.status(200).json(items[itemIndex]); 
    } else {
        res.status(404).json({ error: `Item with ID ${itemId} not found.` });
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
