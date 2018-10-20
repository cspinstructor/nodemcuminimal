const express = require('express');
const server = express();
const Sensor = require('./Sensor');

var sensorValue = new Sensor({
  name: 'sensor1',
  value: -1
});

//from nodemcu
server.get('/', (req, res) => {
  sensorValue = new Sensor({
    name: 'sensor1',
    value: req.query.sensor1
  });

  sensorValue
    .save()
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });

  res.status(200).json(sensorValue);
});

//from react
server.get('/getsensor1', (req, res) => {
  res.status(200).json(sensorValue.value);
});

//from react
server.get('/getallsensor1', (req, res) => {
  const query = { name: 'sensor1' };
  Sensor.find(query)
    .then(response => {
      // console.log(response);
      res.status(200).json(response);
    })
    .catch(error => {
      console.log(error);
      res.status(400).json(error);
    });
});

server.listen(5000, () => {
  console.log('server started on port 5000');
});
