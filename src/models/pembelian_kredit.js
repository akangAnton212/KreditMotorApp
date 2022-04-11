'use strict';
module.exports = (sequelize, DataTypes) => {
  const pembelian_kredit = sequelize.define('pembelian_kredit', {
    no_faktur:{
      type:DataTypes.STRING,
      allowNull: false
    },
    nama_pemesan:{
      type:DataTypes.STRING,
      allowNull: false
    },
    alamat:{
      type:DataTypes.STRING,
      allowNull: false
    },
    telepon:{
      type:DataTypes.STRING,
      allowNull: false
    },
    kendaraan_id:{
      type:DataTypes.STRING,
      allowNull: false
    },
    nomor_ktp:{
      type:DataTypes.STRING,
      allowNull: false
    },
    foto:DataTypes.STRING,
    tgl_jatuh_tempo:{
      type:DataTypes.STRING,
      allowNull: false
    },
    uang_muka:{
      type:DataTypes.DOUBLE,
      allowNull: false
    },
    cicilan_perbulan:{
      type:DataTypes.DOUBLE,
      allowNull: false
    },
    uid: DataTypes.STRING,
    lama_angsuran:{
      type:DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'pembelian_kredits'
  });
  pembelian_kredit.associate = function(models) {
    // associations can be defined here
  };
  return pembelian_kredit;
};