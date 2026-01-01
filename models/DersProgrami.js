const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const DersProgrami = sequelize.define('DersProgrami', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ders_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'dersler',
            key: 'id'
        }
    },
    gun: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    baslangic_saati: {
        type: DataTypes.STRING(5),
        allowNull: false
    },
    bitis_saati: {
        type: DataTypes.STRING(5),
        allowNull: false
    },
    derslik: {
        type: DataTypes.STRING(20)
    }
}, {
    tableName: 'ders_programi',
    timestamps: false
});

module.exports = DersProgrami;
