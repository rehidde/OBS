const app = require('./app');

// Capture synchronous exceptions that crash the process
process.on('uncaughtException', (err) => {
    console.error('CRITICAL ERROR: Uncaught Exception:', err);
    const fs = require('fs');
    try {
        fs.appendFileSync('crash_log.txt', `[${new Date().toISOString()}] Uncaught Exception: ${err.stack}\n`);
    } catch (e) { }
});

// Capture unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('CRITICAL ERROR: Unhandled Rejection:', reason);
    const fs = require('fs');
    try {
        fs.appendFileSync('crash_log.txt', `[${new Date().toISOString()}] Unhandled Rejection: ${reason}\n`);
    } catch (e) { }
});


//burası sadece apple karışmasın diye ekstra açtığımız server kısmı 
//kodları değiştirmeden önce haber edin
const PORT = 27997;




app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor...`);
});

