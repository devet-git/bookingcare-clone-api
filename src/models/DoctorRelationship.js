'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class DoctorRelationship extends Model {

		static associate(models) {
			// define association here
		}
	}
	DoctorRelationship.init({
		doctorId: DataTypes.INTEGER,
		clinicId: DataTypes.INTEGER,
		specialtyId: DataTypes.INTEGER,
	}, {
		sequelize,
		modelName: 'DoctorRelationship',
	});
	return DoctorRelationship;
};