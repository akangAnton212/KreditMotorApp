'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kendaraan = sequelize.define('Kendaraan', {
    merk: DataTypes.STRING,
    stok: DataTypes.INTEGER,
    harga_jual: DataTypes.DOUBLE,
    uid:DataTypes.STRING,
    is_aktif:DataTypes.BOOLEAN
  }, {});
  Kendaraan.associate = function(models) {
    // associations can be defined here
  };
  return Kendaraan;
};