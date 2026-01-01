const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Ogrenci = sequelize.define('Ogrenci', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    kullanici_id: {
        type: DataTypes.INTEGER
    },
    ogrenci_no: {
        type: DataTypes.STRING(20)
    }
}, {
    tableName: 'ogrenci',
    timestamps: false
});

module.exports = Ogrenci;
