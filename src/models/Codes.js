'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Codes extends Model {

		static associate(models) {
			// define association here
		}
	}
	Codes.init({
		key: DataTypes.STRING,
		type: DataTypes.STRING,
		valueEng: DataTypes.STRING,
		valueVie: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Codes',
	});
	return Codes;
};