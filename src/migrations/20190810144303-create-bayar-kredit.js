'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bayar_kredits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      no_faktur: {
        type: Sequelize.STRING(20)
      },
      tgl_bayar: {
        type: Sequelize.DATE
      },
      jumlah: {
        type: Sequelize.DOUBLE
      },
      angksuran_ke: {
        type: Sequelize.INTEGER
      },
      bukti_transaksi: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.UUID
      },
      keterangan: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('bayar_kredits');
  }
};