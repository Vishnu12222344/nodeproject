var exp = require('express');
var app = exp();
var details = require('./backend'); // Assuming './backend' is the file where you define your database model
var body = require('body-parser');
var path1 = require('path');
var path2 = path1.join(__dirname);
app.use(exp.static(path2));
var encoded = body.urlencoded({ extended: false });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/login', encoded, async (req, res) => {
    var usermail = req.body.email;
    var pass1 = req.body.pass;
    
        details.findOne({email: usermail,password: pass1 })
        .then((c)=>{
            if(c){
                res.redirect('/home');
            }
            else{
                res.redirect('/wlogin');
            }
        })
       
        

});
app.get('/wlogin',(req,res)=>{
    res.sendFile(__dirname+'/wlog.html')
})

app.post('/signup', encoded, async (req, res) => {
    
        var f = new details(req.body); 
        await f.save()
        .then(()=>{
            res.redirect('/sregister');
        })
    
    
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/Index2.html');
});
app.get('/sregister',(req,res)=>{
res.sendFile(__dirname+'/sreg.html');

})

app.listen(3005, () => {
    console.log("Server is running on port 3005");
});
