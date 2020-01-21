var User = require('../model/users');
var multer =require('multer');
var path =require('path');
var fs =require('fs');
var bcrypt=require('bcryptjs');
var http=require('http');
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./upload/');
    },
    filename :function(req,file,cb){
        //cb(null, new Date().getTime().toString()+'-'+path.extname(file.originalname));
        cb(null, Date.now() +'-'+path.extname(file.originalname));
    }
});

var upload =multer({storage:storage});
module.exports = function (app) {

    //register
   /* app.post ('/users',upload.single('avatar'),(req,res)=>{
        var newUser =new User();
        newUser.fname= req.body.fname;
        newUser.lname= req.body.lname;
        newUser.email= req.body.email;
        newUser.password= req.body.password;
        newUser.role= req.body.role;
        newUser.avatar= req.body.avatar;
        User.findOne({
            email: req.body.email
        }, (err, user) => {
            if (err) throw err;
            console.log(user);
            if (!user) {
                newUser.save(function (err) {
                    if (err) {
                        return res.send(err);
                    }

                    //mailsetup.veryficationMailSender(req, newUser._id);
                    res.json({
                        message: 'User saved',
                        success: true
                    });
                });
            } else {
                res.json({
                    message: 'User already exist',
                    success: false
                });
            }
        });
    });*/

    //login 
   /* app.post('/login', function (req, res) {
        User.findOne({
            email: req.body.email
        }, (err, user) => {
            if (err) throw err;
            if (!user || !user.comparePassword(req.body.password)) {
                res.json({
                    message: 'user does not exist',
                    success: false
                });
                return;
            }
            res.json({
                message: 'success',
                user: user, 
                success: true
            });
        });

    });*/
    app.post('/',function (req,res){
        var fname = req.body.fname;
        var lname = req.body.lname;
        var email = req.body.email;
        var password = req.body.password;
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);
        var avatar = req.body.avatar;
        var role = req.body.role;
        var user = new User({
          //_id: new mongoose.Types.ObjectId(),
          fname: fname,
          lname: lname,
          email: email,
          password: hash,
          avatar: avatar,
          role: role
        });
        user.save().then(function (result){
          res.status(200).json({
            message : "User Created",
            User: result,
            error: false
          });
      
        }).catch(function (err){
          res.status(500).json({
            message: err,
            error: true
          })
        } )});


    //login
app.post('/login',function (req,res) {
    var email = req.body.email;
    var pass = req.body.password;
    User.find({email:email}).exec().then(function(docs){
      if (docs.length===0) res.status(200).json({error: true,
        message: "Wrong Username"});
     else if (bcrypt.compareSync(pass, docs[0].password)===false){
        res.status(200).json({message: "Wrong Password",
          error:true});
      }
      else res.status(200).json({user: docs, message : "Hello",
          error: false});
    }).catch(function (err) {
      res.status(500).json({message: err,
        error: true})
  
    });
  });


    //search 
    app.post('/search/:name',(req,res)=>{
        User.find({
            fname:req.params.name
        }, (err, doc) => {
            if (err) throw err;
            if (!doc) {
                res.json({
                    message: 'user does not exist',
                    success: false
                });
                return;
            }
            res.send(doc);          

    });
   });


//envoi l'image de current user 


   app.post('/users/:email',(req,res)=>{
       
    User.findOne({
        email:req.params.email
    }, (err, doc) => {
        if (err) throw err;
        if (!doc) {
            res.json({
                message: 'user does not exist',
                success: false
            });
            return;
        }
        //res.send(doc.avatar);
        newUser=doc.avatar.split(';base64,').pop();
        fs.writeFile('../avatar/src/assets/imgs/email.jpeg', newUser, {encoding: 'base64'}, function(err) {
        
        var img = fs.readFileSync('../avatar/src/assets/imgs/email.jpeg');
        res.setHeader('content-Type','image/jpeg');
        res.send(img);
        console.log('File created');
         })
});
});


//delete user

app.delete('/delete/:email',(req,res)=>{
      
    User.findOneAndRemove({
        email:req.params.email
    }, (err, doc) => {
        if (err) throw err;
        if (!doc) {
            res.json({
                message: 'user does not exist',
                success: false
            });
            return;
        }
        res.json({
            message: 'success',
            success: true           

});
})
});


//envoi image with id parametre
app.get('/images/:id',(req,res)=>{

    User.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else {console.log('Error in Retriving User :'+JSON.stringify(err,undefined,2));}
    })
});

//Selectionner tous les utilisateurs
app.get('/', function(req, res, next) {
    User.find().exec().then(function (docs) {
      if (docs.length===0) res.status(200).json({error: true,
        message: "Nothing Found"});
      else res.status(200).json({user: docs,
        error: false});
    }).catch(function (err) {
      res.status(500).json({message: err,
        error: true})
  
    });
  });









}