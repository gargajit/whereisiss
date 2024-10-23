import express from "express";
const app = express();    // object
const port = 3000;

app.use(express.static('public'));


// app.listen(port, callback);    //listen method
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});