const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;


// Middlewares
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('about us')
})
const users = [
  {
    id: 1,
    name: "Abu Bakkar",
    email: "abubakkar@gmail.com",
    age: 22
  },
  {
    id: 2,
    name: "Rahim",
    email: "rahim@gmail.com",
    age: 24
  },
  {
    id: 3,
    name: "Karim",
    email: "karim@gmail.com",
    age: 21
  },
  {
    id: 4,
    name: "Sadia",
    email: "sadia@gmail.com",
    age: 23
  },
  {
    id: 5,
    name: "Nusrat",
    email: "nusrat@gmail.com",
    age: 25
  }
];


app.get("/user", (req, res)=>{
    res.send(users)
})


app.post('/user', (req, res)=>{
  console.log("post method working", req.body);
  const newUser = req.body;
  newUser.id = users.length+ 1;
  users.push(newUser)
  res.send({success:true, data:newUser, message:"user added successful"})
})

app.listen(port, ()=>{
    console.log(`server is running ${port}`);
})