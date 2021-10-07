'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Task, {
        through: 'Usertasks', 
        foreignKey: 'user_id' });
    }
  };
  User.init({
    first_name: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: { 
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    password: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: { 
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
