"use strict";
const express = require("express");
const port = 3000;
const app = express();
var fs = require("fs");

const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
  res.end("welcome");
});

app.listen(3000, () => {
  console.log("OK : server listing on port : 3000");
});

app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});

app.get("/time", (req, res) => {
  let date1 = new Date();
  let hours = date1.getHours();
  let minutes = date1.getMinutes();
  res.send({ status: 200, message: hours + " :" + minutes });
});

app.get("/hello", (req, res) => {
  parameter = "Hello, " + req.params.tagid;
  res.send({ status: 200, message: parameter });
});

app.get('/search',(req,res) => {
  const search = req.query.s;

  if (typeof search != 'undefined') {
      
      const response = {
          status:200, message:"ok", data: search
      };

      res.send(response);
  }
  else {
      const response = {
          status:500, error:true, message: "you have to provide a search"
      };

      res.status(500);
      res.send(response);
  }
})

app.get("/movies/create", (req, res) => {
  res.send({ status: 200, message: "create" });
});
// app.get("/movies/read", (req, res) => {
//   res.send({ status: 200, message: "read" });
// });
app.get("/movies/delete", (req, res) => {
  res.send({ status: 200, message: "update" });
});
app.get("/test", (req, res) => {
  res.send({ status: 200, message: "delete" });
});


const movies = [
  { title: 'Jaws', year: 1975, rating: 8 },
  { title: 'Avatar', year: 2009, rating: 7.8 },
  { title: 'Brazil', year: 1985, rating: 8 },
  { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 }
];

app.get('/movies',(req,res) => res.send(movies));

app.get("/movies/read", (req, res) => {
  
  let text = req.params.text;
  console.log(movies)
  res.send({ status: 200});

  
});




app.get('/movies/read/by-date', (req, res) => {
  
  var sort1= [];
  for (var title1 in movies) {
    console.log(movies[title1].title)
      sort1.push([movies[title1].title, movies[title1].year]);
  }
  sort1.sort(function(a,b){
    return new sort1(b.title) - new sort1(a.title);
  })
  res.send({status:200, data:sort1});
});

  app.get('/movies/read/by-reating', (req, res) => {
  
    
    var sort1= [];
    for (var rat1 in movies) {
      console.log(movies[rat1].title)
      sort1.sort()
        sort1.push([movies[rat1].title, movies[rat1].rating]);
    }
    sort1.sort(function(a,b){
      return new Date(b.year) - new Date(a.year);
    })
    res.send({status:200, data:sort1});
  });


app.get('/movies/read/id/:text?', (req, res) => {
  let text = req.params.text;
  console.log(text)
  if(text<=movies.length){
    res.send({status:200, data:movies[text-1].title})

  }else{
    res.send({status:404, error:true, message:'this movie <ID> does not exist'})
  }
})


app.listen(3000, () =>
  console.log('server listing on port : 3000'),
);


app.get('/movies/add', (req, res) => {
  
  
  for (var title1 in movies) {
    let addNew = new moviesModel({
      title: req.query.title,
      year: req.query.year,
      rating: req.query.rating,
    });
    
  }
  newMovie.save((err, newMovie) => {
    if (err) res.send(err);
    else res.send({ status: 200, data: addNew});
  });
});

app.get('/movies/delete', (req, res) => {
let filteredArray = sort1.filter(sort1=> {
  if(sort1.title == title ){
    filteredArray.pop();
  }
  else{
    res.send({ status: 200, message : " the movie does not exist"});
    
  }



})

});