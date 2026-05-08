const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('about us')
})


app.listen(port, ()=>{
    console.log(`server is running ${port}`);
})