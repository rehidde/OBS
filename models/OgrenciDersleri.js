const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const OgrenciDersleri = sequelize.define('OgrenciDersleri', {

    ogrenci_id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        references: {
            model: 'kullanici',
            key: 'id'
        }
    },
    ders_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'dersler',
            key: 'id'
        }
    },
    ders_ad: {
        type: DataTypes.STRING(100)
    },
    kredi: {
        type: DataTypes.INTEGER
    },
    akts: {
        type: DataTypes.INTEGER
    },
    notu: {
        type: DataTypes.INTEGER
    },
    ogretmen: {
        type: DataTypes.STRING(100)
    },
    harf_notu: {
        type: DataTypes.STRING(2)
    },
    yariyil: {
        type: DataTypes.INTEGER
    },
    durum: {
        type: DataTypes.STRING(20)
    }
}, {
    tableName: 'ogrencidersleri',
    timestamps: false
});

module.exports = OgrenciDersleri;
