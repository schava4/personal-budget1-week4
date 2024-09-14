const express = require('express');
const app = express();
const port =3000;
app.use('/', express.static('public'));
const data = require('./data.json');

app.get('/hello',(req,res) => {
    res.send('Hello World!');

});
app.get('/budget',(req,res)=>{
    res.json(data);
})
app.listen(port, () => {
  console.log(`Serving at http://localhost:${port}`)
});
