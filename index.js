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
  const {a, b} = req.query;

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

//drill 2

app.get('/cipher', (req, res) => {
  const {text , shift} = req.query;

  if(!text){
    return res
    .status(400)
    .send('text required');
  }

  if(!shift){
    return res
    .status(400)
    .send('shift required');
  }
  const shiftKey = typeof('number');

  if(typeof(shiftKey)==='number'){
    return res
    .status(400)
    .send('numerical value required');

  }
  const base = 'A'.charCodeAt(0);  

  const cipher = text
    .toUpperCase()
    .split('') 
    .map(char => { 
      const code = char.charCodeAt(0); 
      if(code < base || code > (base + 26)) {
        return char;
      }
      let diff = code - base;
      diff = diff + shiftKey; 
    
      diff = diff % 26;
      
      const shiftedChar = String.fromCharCode(base + diff);
      return shiftedChar;
    })
    .join(''); 
  res
    .status(200)
    .send(cipher);  
});

