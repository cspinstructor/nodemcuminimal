const express = require('express');
const server = express();

var data = [];

server.get('/', (req, res) => {
  var value1 = req.query.sensor1;

  data.push(value1);

  const responsestr = `sensor1: ${value1}`;

  res.status(200).send(responsestr);
  console.log(responsestr);
});

server.get('/historical', (req, res) => {
  var str = 'Historical data: <p>';
  data.forEach(value => {
    str = str + value + '<br>';
  });

  res.status(200).send(str);
});

server.listen(5000, () => {
  console.log('server started on port 5000');
});
