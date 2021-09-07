const express = require('express'); 
const app = express(); 

app.get('/', (req, res) => {
    res.send("Hello World Im Jonathan Jaco");
});
    
const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Console"); 
});
