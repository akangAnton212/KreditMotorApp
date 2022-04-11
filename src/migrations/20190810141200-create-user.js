'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(20),
        validate:{ min: 6 }
      },
      password: {
        type: Sequelize.STRING,
      },
      nama_lengkap: {
        type: Sequelize.STRING
      },
      jenis_kelamin: {
        type: Sequelize.CHAR(1)
      },
      alamat: {
        type: Sequelize.STRING
      },
      telepon: {
        type: Sequelize.STRING(13)
      },
      role_id: {
        type: Sequelize.UUID
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
    return queryInterface.dropTable('Users');
  }
};