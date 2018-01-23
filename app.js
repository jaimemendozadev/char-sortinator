const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const publicfiles = path.resolve(__dirname + '/public');

app.use(express.static(publicfiles));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (req, res) => {
  res.status(200);
});

app.listen(4000, ()=>{
  console.log("Listening on port 4000");
});
