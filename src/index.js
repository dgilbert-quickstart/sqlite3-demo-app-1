//https://coderslegacy.com/javascript-sqlite3-tutorial-for-beginners-node-js/

const sqlite3 = require('sqlite3').verbose();

//windwos or macos or linux 
//let _dbname = "data\demodb1.db"
let _dbname = "data\dashboard.db"

//macos, linux os 
//let _dbname = "data/demodb1.db"
//let _dbname = "data/dashboard.db"

let db = new sqlite3.Database(_dbname, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected successfully.');
});

/*
db.all("SELECT * FROM user", [], (err, rows) => {
    console.log(rows)
})
*/

db.get("SELECT * FROM user", [], (err, row) => {
    if (err) {
        throw err; 
    }
    console.log(row);
});


