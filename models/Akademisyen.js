const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Akademisyen = sequelize.define('Akademisyen', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ad: {
        type: DataTypes.STRING(50)
    },
    soyad: {
        type: DataTypes.STRING(50)
    },
    unvan: {
        type: DataTypes.STRING(50)
    },
    foto_url: {
        type: DataTypes.STRING(255)
    },
    kullanici_id: {
        type: DataTypes.STRING(10)
    }
}, {
    tableName: 'akademisyen',
    timestamps: false
});

module.exports = Akademisyen;
