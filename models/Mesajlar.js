const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Mesajlar = sequelize.define('Mesajlar', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    gonderen_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'kullanici',
            key: 'id'
        }
    },
    alici_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'kullanici',
            key: 'id'
        }
    },
    konu: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    icerik: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    tarih: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    okundu: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'mesajlar',
    timestamps: false
});

module.exports = Mesajlar;
