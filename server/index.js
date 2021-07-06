const express = require("express");
const app = express();
const cors = require('cors');
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
const createTable = () => {
    console.log("inside create table")
   db.run("CREATE TABLE IF NOT EXISTS user(id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR, password VARCHAR)");
}

app.post("/register", (req, res) =>{
    const email = req.body.email
    const password = req.body.password
    


    const result = 'SELECT * FROM user WHERE email = ?';

    db.all(result, [email],(err, row) => {
        if (err) {
            console.log(err.message);
            res.send(err.message)
        }
        else if(row.length != 0){
            res.send({message:"Failed"})
        }
        else{
            
            db.run('INSERT INTO user (email,password) VALUES (?,?)', [email, password]);
            res.send({message:"Success"});
        }
      });

});

app.post("/login", (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password);


    const result = 'SELECT * FROM user WHERE email = ? AND password = ?';


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
       
})

app.listen(3001,() => {
    console.log("running on port 3001")
});