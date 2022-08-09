'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Histories extends Model {

		static associate(models) {
			// define association here
		}
	}
	Histories.init({
		patientId: DataTypes.INTEGER,
		doctorId: DataTypes.INTEGER,
		description: DataTypes.TEXT,
	}, {
		sequelize,
		modelName: 'Histories',
	});
	return Histories;
};