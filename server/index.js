const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite = require('sqlite3').verbose();

let db = new sqlite.Database("./mydb.sqlite3", (err) => { 
    if (err) { 
        console.log('Error when creating the database', err) 
    } else { 

        createTable()
    } 
});
app.use(cors());
app.use(express.json());
//app.use(bodyParser.urlencoded({extended: true}));
const createTable = () => {

   db.run("CREATE TABLE IF NOT EXISTS user(id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR, password VARCHAR)");
    //db.run("CREATE TABLE IF NOT EXISTS CropA(id INTEGER PRIMARY KEY AUTOINCREMENT, temp VARCHAR, moisture VARCHAR. luminance VARCHAR)");
   // db.run("CREATE TABLE IF NOT EXISTS CropB(id INTEGER PRIMARY KEY AUTOINCREMENT, temp VARCHAR, moisture VARCHAR. luminance VARCHAR)");
   // db.run("CREATE TABLE IF NOT EXISTS CropC(id INTEGER PRIMARY KEY AUTOINCREMENT, temp VARCHAR, moisture VARCHAR. luminance VARCHAR)");

}

app.post("/register", (req, res) =>{
    const email = req.body.email
    const password = req.body.password
    db.run('INSERT INTO user (email,password) VALUES (?,?)', [email, password]);
});

app.post("/login", (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password);


    const result = 'SELECT * FROM user WHERE email = ? AND password = ?';
//     console.log(result);
   
   
    // db.run('SELECT * FROM user WHERE email = ? AND password = ?', [email, password], 
    //     (err)=>{
    //         if(err){
    //             console.log(err.message);
    //             res.send(err.message)
    //         }
    //         else{
    //             res.send({message: "Login Success"})
    //         }
            
    //     });


    db.all(result, [email, password],(err, row) => {
        if (err) {
            console.log(err.message);
            res.send(err.message)
        }
        else if(row.length != 0){
            res.send({message:"Success"})
        }
        else{
            res.send({message:"Failed"})
        }
      });
       

    // if(result){
    //     res.send(result);
    // }
    // else{
    //     res.send("error");
    // }
})

app.listen(3001,() => {
    console.log("running on port 3001")
});