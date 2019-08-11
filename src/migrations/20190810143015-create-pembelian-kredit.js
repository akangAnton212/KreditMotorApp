'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pembelian_kredits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      no_faktur: {
        type: Sequelize.STRING(20)
      },
      nama_pemesan: {
        type: Sequelize.STRING(50)
      },
      alamat: {
        type: Sequelize.STRING
      },
      telepon: {
        type: Sequelize.STRING(13)
      },
      kendaraan_id: {
        type: Sequelize.CHAR(36)
      },
      nomor_ktp: {
        type: Sequelize.STRING(50)
      },
      foto: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      tgl_jatuh_tempo: {
        type: Sequelize.STRING(2)
      },
      uang_muka: {
        type: Sequelize.DOUBLE
      },
      cicilan_perbulan: {
        type: Sequelize.DOUBLE
      },
      uid: {
        type: Sequelize.UUID
      },
      lama_angsuran: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.CHAR(36)
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
    return queryInterface.dropTable('pembelian_kredits');
  }
};