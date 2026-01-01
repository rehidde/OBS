const app = require('./app');



//burası sadece apple karışmasın diye ekstra açtığımız server kısmı 
//kodları değiştirmeden önce haber edin
const PORT = 27997;




app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor...`);
});

