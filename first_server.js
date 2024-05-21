const express = require('express')
const app = express()

app.use(express.json())
app.post('/health-check',function(req,res){
  const kidney = req.body.kidney;
  const kidney_length = kidney.length
  res.send("You have "+kidney_length + "kidneys");
});
app.listen(3001);
