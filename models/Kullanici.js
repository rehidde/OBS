const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Kullanici = sequelize.define('Kullanici', {
    id: {
        type: DataTypes.STRING(10),
        primaryKey: true
    },
    rol: {
        type: DataTypes.STRING(20)
    },
    numara: {
        type: DataTypes.STRING(10)
    },
    sifre: {
        type: DataTypes.STRING(10)
    },
    ad: {
        type: DataTypes.STRING(50)
    },
    soyad: {
        type: DataTypes.STRING(50)
    },
    foto_url: {
        type: DataTypes.STRING(255)
    },
    tc: {
        type: DataTypes.STRING(11)
    }
}, {
    tableName: 'kullanici',
    timestamps: false
});

Kullanici.prototype.isAdmin = function () {
    return this.rol === 'admin';
};

module.exports = Kullanici;
