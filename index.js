// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello Express!');
// });

// app.listen(8000, () => {
//   console.log('Express server is listening on port 8000!');
// });

const express = require('express');
const app = express();

app.get('/sum', (req, res) => {
  // res.send('Hello Express!');
  const a = req.query.a;
  const b = req.query.b;

  if(!a) {
    return res.status(400).send('Please provide a');
  }

  if(!b) {
    return res.status(400).send('Please provide b');
  }

  if (typeof!(a && b) === 'number') {
    res.status(400).send('Value must be a number');
  }

  let c = a+b;
  res.send(`The sum of ${a} and ${b} is ${c}`);

});

app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});