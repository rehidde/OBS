

const mysql = require('mysql2');


// daha sonra buraya dotenv diye bir
// bilgileri güvende tutma sistemini kuracağız
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '31415',
  database: 'OBS',

});



module.exports = pool;


