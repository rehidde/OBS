const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Donem = sequelize.define('Donem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    ad: {
        type: DataTypes.STRING(20)
    }
}, {
    tableName: 'donem',
    timestamps: false
});

module.exports = Donem;
