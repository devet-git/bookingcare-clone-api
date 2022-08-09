'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("Users", [{
			email: "devet.279@gmail.com",
			pw: '1234',
			fullname: 'Bui Thang',
			addr: 'Cao Thang, Eakao, BMT',
			gender: 1,
			roleType: "ROLE",
			roleKey: "R1",
			createdAt: new Date(),
			updatedAt: new Date(),
		}])
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	}
};
