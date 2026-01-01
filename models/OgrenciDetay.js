const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const OgrenciDetay = sequelize.define('OgrenciDetay', {
    kullanici_id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        references: {
            model: 'kullanici',
            key: 'id'
        }
    },
    anne: {
        type: DataTypes.STRING(50)
    },
    baba: {
        type: DataTypes.STRING(50)
    },
    dogum: {
        type: DataTypes.STRING(50)
    },
    kayit: {
        type: DataTypes.STRING(20)
    },
    egitim: {
        type: DataTypes.STRING(50)
    },
    durum: {
        type: DataTypes.STRING(50)
    },
    sinif: {
        type: DataTypes.STRING(20)
    },
    program: {
        type: DataTypes.STRING(150)
    },
    puan: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: 'ogrencidetay',
    timestamps: false
});

module.exports = OgrenciDetay;
