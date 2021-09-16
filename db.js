const Pool = require('pg').Pool
const pool = new Pool({
    user: "untitled", //enter your psql username 
    password: "untitled", //enter password to your db
    host: "localhost",
    port: 3000, 
    database: "untitled" //enter your db name
})


module.exports = pool

//you insert your db data