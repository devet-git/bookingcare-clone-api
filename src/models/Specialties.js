'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Specialties extends Model {

		static associate(models) {
			// define association here
		}
	}
	Specialties.init({
		image: DataTypes.STRING,
		description: DataTypes.TEXT,
	}, {
		sequelize,
		modelName: 'Specialties',
	});
	return Specialties;
};