'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      star: {
        type: Sequelize.STRING
      },
      labelCode: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      attributesId: {
        type: Sequelize.STRING
      },
      categoryCode: {
        type: Sequelize.STRING
      },
      priceCoe: {
        type: Sequelize.STRING
      },
      areaCode: {
        type: Sequelize.STRING
      },
      provinceCode: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.STRING
      },
      overviewId: {
        type: Sequelize.STRING
      },
      imagesId: {
        type: Sequelize.STRING
      },
      priceNumber: {
        type: Sequelize.FLOAT
      },
      areaNumber: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};