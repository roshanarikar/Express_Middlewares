const express = require("express");
const app = express();

app.get("/books", (req, res) => {
    console.log ( "Fetching all books")
});

app.listen(5000, () =>{
    console.log("Hello I'm listening  on port 5000")
})