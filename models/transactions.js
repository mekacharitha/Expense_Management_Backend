'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transactions = sequelize.define('Transactions', {
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    date: DataTypes.DATE,
    userId: DataTypes.INTEGER,
    accountId: DataTypes.INTEGER
  }, {});
  Transactions.associate = function(models) {
    // associations can be defined here
    Transactions.belongsTo(models.Users,{foreignKey: 'userId'});
    models.Users.hasMany(Transactions,{foreignKey: 'userId'});

    Transactions.belongsTo(models.Accounts,{foreignKey: 'accountId'});
    models.Accounts.hasMany(Transactions,{foreignKey: 'accountId'});

  };
  return Transactions;
};