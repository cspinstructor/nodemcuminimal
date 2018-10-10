const express = require('express');
const server = express();

//simulating a database
var data = [];

//Api call http://localhost:5000/?sensor1=65
server.get('/', (req, res) => {
  var value1 = req.query.sensor1;

  const responsestr = `sensor1: ${value1}`;
  data.push(value1);
  res.status(200).send(`received  ${responsestr}`);
});

// request this to get all data from array
server.get('/values', (req, res) => {
  var i = 0;
  var responsestr = '';
  data.forEach(v => {
    i++;
    responsestr += `value ${i}: ${v}<br>`;
  });

  res.status(200).send(responsestr);
});

server.listen(5000, () => {
  console.log('server started on port 5000');
});
