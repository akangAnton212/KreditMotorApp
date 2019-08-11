'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    nama_role: DataTypes.STRING,
    uid:DataTypes.STRING,
    is_aktif:DataTypes.BOOLEAN
  }, {});
  Role.associate = function(models) {
    //Role.hasOne(models.User, {as: 'user', foreignKey: 'role_id'})
  };
  return Role;
};