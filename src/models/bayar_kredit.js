'use strict';
module.exports = (sequelize, DataTypes) => {
  const bayar_kredit = sequelize.define('bayar_kredit', {
    no_faktur: DataTypes.STRING,
    tgl_bayar: DataTypes.DATE,
    jumlah: DataTypes.DOUBLE,
    angksuran_ke: DataTypes.INTEGER,
    bukti_transaksi: DataTypes.STRING,
    user_id: DataTypes.STRING,
    keterangan: DataTypes.STRING
  }, {
    tableName: 'bayar_kredits'
  });
  bayar_kredit.associate = function(models) {
    // associations can be defined here
  };
  return bayar_kredit;
};