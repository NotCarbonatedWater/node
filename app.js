const express = require('express'); 
const app = express(); 

app.get('/', (req, res) => {
    res.send("Hello World Im Jonathan Jaco");
});
    
app.listen(3000, () => {
    console.log("Console"); 
});
