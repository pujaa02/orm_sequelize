'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert('Menu', [
      {
        restaurant_id: 1,
        item_name: "italian pizza",
        price: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        restaurant_id: 1,
        item_name: "sandwich",
        price: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        restaurant_id: 1,
        item_name: "french fries",
        price: 70,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        restaurant_id: 2,
        item_name: "manchurian",
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        restaurant_id: 2,
        item_name: "chowmein",
        price: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        restaurant_id: 2,
        item_name: "fried rice",
        price: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        restaurant_id: 3,
        item_name: "chilli paneer",
        price: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        restaurant_id: 3,
        item_name: "garlic bread",
        price: 256,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        restaurant_id: 3,
        item_name: "fixed punjabi thali",
        price: 250,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        restaurant_id: 4,
        item_name: "veg hot & sour soup",
        price: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        restaurant_id: 4,
        item_name: "paneer roll",
        price: 130,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        restaurant_id: 4,
        item_name: "vge momos",
        price: 70,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        restaurant_id: 5,
        item_name: "burger",
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        restaurant_id: 5,
        item_name: "vadapaw",
        price: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('Menu', {});
  },
};
