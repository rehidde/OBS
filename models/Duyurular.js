const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Duyurular = sequelize.define('Duyurular', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    baslik: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    icerik: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    tarih: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    ders_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'dersler',
            key: 'id'
        }
    },
    akademisyen_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'akademisyen',
            key: 'id'
        }
    }
}, {
    tableName: 'duyurular',
    timestamps: false
});

module.exports = Duyurular;
