/*var Image = require('./model/images');

var multer =require('multer');
var path =require('path');
var fs =require('fs');
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


module.exports = function (app) {*/

    // api ---------------------------------------------------------------------

   /* app.post('/login', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        User.findOne({
            email: req.body.email
        }, (err, user) => {
            if (err) throw err;
            if (!user /*|| !user.comparePassword(req.body.password)*//*) {
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

   /* app.post('/signup',upload.single('pic') ,function (req, res) {
        
        // create a todo, information comes from AJAX request from Angular
        var newUser = new User({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: req.body.pw,
            picture:req.file.path,
            role:req.body.role
        });

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
                        message: 'user created',
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

   /* app.post('/reset', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        User.findOne({
            email: req.body.email
        }, function (err, user) {
            if (err)
                res.send(err);

            if (!user || !user.comparePassword(req.body.oldPass)) {
                res.json({
                    message: 'user does not exist',
                    success: false
                });
                return;
            } else {
                user.password = req.body.newPass
                user.save();
                res.json({
                    message: 'success',
                    user: user,
                    success: true
                });
            }
        });

    });*/

    /*app.delete('/images/:id',(req,res)=>{
        //if (!ObjectId.isValid(req.params.id))
           // return res.status(400).send('NO record with given id : ${req.params.id}'); 
        Image.findByIdAndRemove(req.params.id,(err,doc)=>{
            if (!err){ res.send(doc);}
            else { console.log('Error in User Delete :'+JSON.stringify(err,undefined,2));} 
    
        });
        res.json({
            message: 'success',
            success: true
        });
    });




    app.get('/images/:id',(req,res)=>{
        //if (!ObjectId.isValid(req.params.id))
        //    return res.status(400).send('NO record with given id : ${req.params.id}');
    
        Image.findById(req.params.id,(err,doc)=>{
            if(!err){res.send(doc);}
            else {console.log('Error in Retriving User :'+JSON.stringify(err,undefined,2));}
        })
    });*/
  /*  app.get('/users/:id',(req,res)=>{
        //if (!ObjectId.isValid(req.params.id))
        //    return res.status(400).send('NO record with given id : ${req.params.id}');
    
        Image.findById(req.params.id,(err,doc)=>{
            if(!err){
            res.send(doc.avatar);
        }
            else {console.log('Error in Retriving User :'+JSON.stringify(err,undefined,2));
        }
        })
    });


    app.get('/users/:email',(req,res)=>{
        //if (!ObjectId.isValid(req.params.id))
        //    return res.status(400).send('NO record with given id : ${req.params.id}');
        
        Image.findById(req.params.id,(err,doc)=>{
            if(!err){
            res.setHeader('content-Type','image/jpeg');
            fs.createReadStream(path.join('./',doc.picture)).pipe(res);
        }
            else {console.log('Error in Retriving User :'+JSON.stringify(err,undefined,2));
        }
        })
    });*/
    /*app.delete('/delete/:email',(req,res)=>{
        //if (!ObjectId.isValid(req.params.id))
        //    return res.status(400).send('NO record with given id : ${req.params.id}');
        
        Image.findOneAndRemove({
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
   })*/
   /*app.post('/update/:email',(req,res)=>{                  // hethy mta3 il changement de mot de passe ma3reftech kifeh 
    //if (!ObjectId.isValid(req.params.id))                 //na3melha bethabt (ya3ni bil update ou nn )
    //    return res.status(400).send('NO record with given id : ${req.params.id}');
    
    Image.findOne({
        email:req.params.email,
        pass:req.body.pw
    }, (err, doc) => {
        if (err) throw err;
        if (!doc) {
            res.json({
                message: 'user does not exist',
                success: false
            });
            return;
        }
        doc.password=pass;
        res.json({
            message: 'changed',
            success: true    
       
});
})
   })*/


   /* app.post('/users/:email',(req,res)=>{
        //if (!ObjectId.isValid(req.params.id))
        //    return res.status(400).send('NO record with given id : ${req.params.id}');
        
        Image.findOne({
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
            newImage=doc.avatar.split(';base64,').pop();
            fs.writeFile('../avatar/src/assets/imgs/email.jpeg', newImage, {encoding: 'base64'}, function(err) {
            
            var img = fs.readFileSync('../avatar/src/assets/imgs/email.jpeg');
            res.setHeader('content-Type','image/jpeg');
            res.send(img);
            console.log('File created');
             })
            // fs.readFile('email.png', function(err, data) {
             //   if (err) throw err; // Fail if the file can't be read.
             //   console.log('File sended');
             //   res.writeHead(200, {'Content-Type': 'image/jpeg'});
              //  res.end(data);
      
  //    });
    });
    })
*/



















/*



  app.post('/search/:name',(req,res)=>{
        //if (!ObjectId.isValid(req.params.id))
        //    return res.status(400).send('NO record with given id : ${req.params.id}');
        
        Image.findOne({
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
   })







*/







/*

      

    app.get('/images',(req,res)=>{
        Image.find({}, '-__V').lean().exec((err,images)=>{
            if (err){
                return res.sendStatus(400);
            }
            for(let i=0;i<images.length;i++){
                var img =images[i];
                img.url=req.protocol+'://' +req.get('host')+'/images/pic/'+img._id;
            }
            res.json(images);
        })
    });
*/


  /*  app.post('/login', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        Image.findOne({
            email: req.body.email
        }, (err, user) => {
            if (err) throw err;
            if (!user /*|| !user.comparePassword(req.body.password)) {
         /*       res.json({
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

    });

    app.post ('/users',upload.single('avatar'),(req,res)=>{
        var newImage =new Image();
        newImage.fname= req.body.fname;
        newImage.lname= req.body.lname;
        newImage.email= req.body.email;
        newImage.password= req.body.password;
        newImage.role= req.body.role;
        newImage.avatar= req.body.avatar;
        //newImage.avatar=im.split(';base64,').pop();
        //fs.writeFile('image.png', newImage.avatar, {encoding: 'base64'}, function(err) {
       //     console.log('File created');
       // });
        Image.findOne({
            email: req.body.email
        }, (err, image) => {
            if (err) throw err;
            console.log(image);
            if (!image) {
                newImage.save(function (err) {
                    if (err) {
                        return res.send(err);
                    }

                    //mailsetup.veryficationMailSender(req, newUser._id);
                    res.json({
                        message: 'Image saved',
                        success: true
                    });
                });
            } else {
                res.json({
                    message: 'Image already exist',
                    success: false
                });
            }
        });
    });
*/
   // app.get('/users/',(req,res)=>{
      //  Image.find((err,docs)=>{
      //      if (!err){res.send(docs);}
      //      else { console.log('Error in Retriving Users :'+JSON.stringify(err,undefined,2));}
      //  });
  //  });

   /* app.post('/reset', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        User.findOne({
            email: req.body.email
        }, function (err, user) {
            if (err)
                res.send(err);

            if (!user || !user.comparePassword(req.body.oldPass)) {
                res.json({
                    message: 'user does not exist',
                    success: false
                });
                return;
            } else {
                user.password = req.body.newPass
                user.save();
                res.json({
                    message: 'success',
                    user: user,
                    success: true
                });
            }
        });

        
    });*/

    /*app.get('/verify', function (req, res) {
        if (req.query.id) {

            User.findOneAndUpdate({ _id: req.query.id 
            }, 
            { $set: { isVerified: true } },
             function (err, doc) {
                if (err) throw err;
                console.log("email is verified");
                return res.redirect('http://localhost:8100');
            });
        }
        else {
            console.log("email is not verified");
            res.end("<h1>Token Nt Found</h1>");
        }
    });
};*/