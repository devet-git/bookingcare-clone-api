'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Users extends Model {

		static associate(models) {
			// define association here
		}
	}
	Users.init({
		email: DataTypes.STRING,
		pw: DataTypes.STRING,
		fullname: DataTypes.STRING,
		addr: DataTypes.STRING,
		gender: DataTypes.BOOLEAN,
		roleType: DataTypes.STRING,
		roleKey: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Users',
	});
	return Users;
};