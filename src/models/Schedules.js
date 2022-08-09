'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Schedules extends Model {

		static associate(models) {
			// define association here
		}
	}
	Schedules.init({
		curentNumber: DataTypes.INTEGER,
		maxNumber: DataTypes.INTEGER,
		date: DataTypes.DATE,
		timeType: DataTypes.STRING,
		doctorId: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'Schedules',
	});
	return Schedules;
};