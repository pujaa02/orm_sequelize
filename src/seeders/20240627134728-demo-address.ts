'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert('Address', [
      {
        user_id:1,
        city: "talala",
        state: "gujarat",
        street: "0,sasan road, kumbhani para",
        pincode: "362150",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id:2,
        city: "jungadh",
        state: "gujarat",
        street: "Mangnath Rd,",
        pincode: "362001",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id:3,
        city: "Himatnagar",
        state: "gujarat",
        street: "Alkapuri Pologround, Alkapuri",
        pincode: "383001",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id:4,
        city: "Ahmedabad",
        state: "gujarat",
        street: "Sunrise Park Rd, Gurukul",
        pincode: "380052",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('Address', {});
  },
};
