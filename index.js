const express =require("express");
const app =express();
const date= (req,res,next) => {
const datee= new Date();
const day=datee.getDay();
const hours=datee.getHours();
((day<6 && day>0) && (hours<18 && hours>=9))? 
next(): res.send('closed')  
}
app.use(date);
app.get('/test',(req,res) => {
  res.send('testt')
})
app.use(express.static('public'));
app.listen(5000,() => {
  console.log('Server is Renning...');
})
