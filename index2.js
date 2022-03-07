const express = require('express');
const app = express();

app.use(Book1);

app.get('/book/HarryPotter', (req, res) =>{
  return res.send({ route: '/book/HarryPotter' , bookName: req.name });
})

app.get('/book/GameOfThrones', (req, res) =>{
  return res.send({ route: '/book/GameOfThrones' , bookName: req.name });
})

app.get('/game', (req, res) =>{
  return res.send({ route: '/game' , bookName: req.name });
})

function Book1(req, res, next) {
  if ( req.path === '/book/HarryPotter' ){
    req.name = 'Harry Potter';
  }
  else if ( req.path === '/book/GameOfThrones'){
    req.name = 'Game Of Thrones';
  }
  else{
    req.name = 'No Books Exist'
  }
  next();
}

app.listen(3000, () => {
    console.log("Listening on port 3000");
  });