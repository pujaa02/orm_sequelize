'use strict';

import { DataTypes, QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
export default{
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.createTable('Order', {
      order_id: {
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
      order_total: {
        type: Sequelize.DECIMAL(10,2)
      },
      delivery_status: {
        type: Sequelize.STRING
      },
      driver_id: {
        type: Sequelize.INTEGER,
        references: { key: 'driver_id', model: "Driver" }
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
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('Order');
  }
};