const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Dersler = sequelize.define('Dersler', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ad: {
        type: DataTypes.STRING(100)
    },
    kredi: {
        type: DataTypes.INTEGER
    },
    akts: {
        type: DataTypes.INTEGER
    },
    ders_kodu: {
        type: DataTypes.STRING(20)
    },
    tul: {
        type: DataTypes.STRING(10)
    },
    zorunlu_sec: {
        type: DataTypes.STRING(20)
    },
    ogretim_sekli: {
        type: DataTypes.STRING(20)
    },
    yariyil: {
        type: DataTypes.INTEGER
    },
    aciklama: {
        type: DataTypes.TEXT
    },
    sinif: {
        type: DataTypes.INTEGER
    },
    akademisyen_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'dersler',
    timestamps: false
});

module.exports = Dersler;
