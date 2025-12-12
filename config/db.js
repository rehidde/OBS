

const mysql = require('mysql2/promise');


// daha sonra buraya dotenv diye bir
// bilgileri güvende tutma sistemini kuracağız
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '31415',
  database: 'OBS',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,

});



module.exports = pool;


