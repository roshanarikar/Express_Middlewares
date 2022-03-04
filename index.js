const express = require("express");
const app = express();

app.get("/books", (req, res) => {
    console.log ( "Fetching all books")
});

app.get("/books/name", (req, res) => {
    console.log ("GameOfThrones")
});

app.listen(5000, () =>{
    console.log("listening  on port 5000")
})