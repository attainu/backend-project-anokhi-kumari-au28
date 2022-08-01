const express=require('express');
const adminRoutes=require('./router/admin.js');
const userRoute=require('./router/user');
const app=express();
const port=3000;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/css',express.static(__dirname+'/public/css'));
app.use('/images',express.static(__dirname+'/public/images'));
app.use(express.static('public'));

app.use(bodyParser.json());



app.use(adminRoutes);


app.listen(port,()=>{
   console.log(`http://localhost:${port}`);
 })



