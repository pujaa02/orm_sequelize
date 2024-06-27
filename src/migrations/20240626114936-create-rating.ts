'use strict';

import { DataTypes, QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface:QueryInterface, Sequelize:typeof DataTypes) {
    await queryInterface.createTable('Rating', {
      rate_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { key: 'user_id', model: "User" }
      },
      restaurant_id: {
        type: Sequelize.INTEGER,
        references: { key: 'restaurant_id', model: "Restaurant" }
      },
      rating: {
        type: Sequelize.DECIMAL(4,2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface:QueryInterface) {
    await queryInterface.dropTable('Rating');
  }
};