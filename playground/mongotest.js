const Sensor = require('./Sensor');

sensorValue = new Sensor({
  name: 'sensor1',
  value: 550
});

sensorValue
  .save()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
