const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Akademisyen = require('./Akademisyen');
const Dersler = require('./Dersler');
const Donem = require('./Donem');
const Kullanici = require('./Kullanici');
const OgrenciDersleri = require('./OgrenciDersleri');
const OgrenciDetay = require('./OgrenciDetay');
const DersProgrami = require('./DersProgrami');
const Duyurular = require('./Duyurular');
//const Mesajlar = require('./Mesajlar');




Kullanici.hasOne(OgrenciDetay, { foreignKey: 'kullanici_id', as: 'detay' });
OgrenciDetay.belongsTo(Kullanici, { foreignKey: 'kullanici_id', as: 'kullanici' });

Kullanici.hasOne(Akademisyen, { foreignKey: 'kullanici_id', as: 'akademisyen' });
Akademisyen.belongsTo(Kullanici, { foreignKey: 'kullanici_id', as: 'kullanici' });


Kullanici.belongsToMany(Dersler, {
    through: OgrenciDersleri,
    foreignKey: 'ogrenci_id',
    otherKey: 'ders_id',
    as: 'aldigiDersler'
});

Dersler.belongsToMany(Kullanici, {
    through: OgrenciDersleri,
    foreignKey: 'ders_id',
    otherKey: 'ogrenci_id',
    as: 'ogrenciler'
});


Akademisyen.hasMany(Dersler, { foreignKey: 'akademisyen_id', as: 'verilenDersler' });
Dersler.belongsTo(Akademisyen, { foreignKey: 'akademisyen_id', as: 'akademisyen' });


OgrenciDersleri.belongsTo(Kullanici, { foreignKey: 'ogrenci_id', as: 'ogrenci' });
OgrenciDersleri.belongsTo(Dersler, { foreignKey: 'ders_id', as: 'ders' });


Dersler.hasMany(DersProgrami, { foreignKey: 'ders_id', as: 'program' });
DersProgrami.belongsTo(Dersler, { foreignKey: 'ders_id', as: 'ders' });


Akademisyen.hasMany(Duyurular, { foreignKey: 'akademisyen_id', as: 'duyurular' });
Duyurular.belongsTo(Akademisyen, { foreignKey: 'akademisyen_id', as: 'akademisyen' });


Dersler.hasMany(Duyurular, { foreignKey: 'ders_id', as: 'duyurular' });
Duyurular.belongsTo(Dersler, { foreignKey: 'ders_id', as: 'ders' });


//Kullanici.hasMany(Mesajlar, { foreignKey: 'gonderen_id', as: 'gonderilenMesajlar' });
//Kullanici.hasMany(Mesajlar, { foreignKey: 'alici_id', as: 'alinanMesajlar' });
//Mesajlar.belongsTo(Kullanici, { foreignKey: 'gonderen_id', as: 'gonderen' });
//Mesajlar.belongsTo(Kullanici, { foreignKey: 'alici_id', as: 'alici' });


const db = {
    sequelize,
    Sequelize,
    Akademisyen,
    Dersler,
    Donem,
    Kullanici,
    OgrenciDersleri,
    OgrenciDetay,
    DersProgrami,
    Duyurular
};

module.exports = db;
