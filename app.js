
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
const lazhar = require("./models/articleSchema");



// mongodb://lazhhar45:Lazhar123@cluster0-shard-00-00.50x18.mongodb.net:27017,cluster0-shard-00-01.50x18.mongodb.net:27017,cluster0-shard-00-02.50x18.mongodb.net:27017/?ssl=true&replicaSet=atlas-ysqnqs-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0



mongoose.connect("mongodb://lazhhar45:Lazhar123@cluster0-shard-00-00.50x18.mongodb.net:27017,cluster0-shard-00-01.50x18.mongodb.net:27017,cluster0-shard-00-02.50x18.mongodb.net:27017/?ssl=true&replicaSet=atlas-ysqnqs-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    app.listen(port, () =>{
        console.log(`Server is running successfully With "  DATA BASE "  : http://localhost:${port}/`);
    });
})
.catch((err) => {
    console.log(err);
});






// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------
// --------  GET request -----------------------------------------------------------------------------
app.get("/", (req, res) => {
    
    res.render('open', { } );
});



app.get("/LogIn", (req, res) => {



    lazhar.find()
    .then((result ) => {

        res.render("LogIn", {arr: result });

                        function tru(){
                            const email = document.getElementById("one").value ;
                            const pas = document.getElementById("two").value;

                            
                            if (result[0].nameee === email) {
                                console.log(" -------------- its same ------------------------------------------");
                            }else{
                                console.log(" =============== its same ==============================================");
                            }
                        }

                        
    })
    .catch((err) => {
      console.log(err);
    });








});



app.get("/CreatCompte", (req, res) => {
    res.render('CreatCompte', { } );
});

app.get("/home", (req, res) => {
    res.render('home', { } );
});

app.get("/edit", (req, res) => {
    res.render('edit', { } );
});

app.get("/group", (req, res) => {
    res.render('group', { } );
});

app.get("/truck", (req, res) => {
    res.render('truck', { } );
});

app.get("/phone", (req, res) => {
    res.render('phone', { } );
});

app.get("/cars", (req, res) => {
    res.render('cars', { } );
});

app.get("/briefcase", (req, res) => {
    res.render('briefcase', { } );
});

// -----------------------------------------------------------------------------------------------------



// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------
// --------  POST request -----------------------------------------------------------------------------


app.post("/SendData", (req, res) => {
    const Lazhar = new lazhar(req.body);
  
    Lazhar
    .save()
      .then( result => {
        console.log("------------------  add informaion is correct ----------------------------");
        res.redirect("/Login");
      })
      .catch( err => {
        console.log(err);
      });
  });


