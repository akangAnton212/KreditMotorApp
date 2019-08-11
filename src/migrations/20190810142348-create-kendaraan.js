'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Kendaraans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      merk: {
        type: Sequelize.STRING(100)
      },
      stok: {
        type: Sequelize.INTEGER
      },
      harga_jual: {
        type: Sequelize.DOUBLE
      },
      uid: {
        type: Sequelize.UUID
      },
      is_aktif: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('Kendaraans');
  }
};