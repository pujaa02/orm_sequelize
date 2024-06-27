'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert('User', [
      {
        fname: "Puja",
        lname: "Moravadiya",
        email: "puja@gmail.com",
        phone: 9313003213,
        gender: "female",
        bd: "2002-11-30",
        password: "Puja@2002",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fname: "Maya",
        lname: "Vora",
        email: "maya@gmail.com",
        phone: 8974859632,
        gender: "female",
        bd: "2003-12-15",
        password: "Maya@12345",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fname: "Aarav",
        lname: "Patel",
        email: "aarav@gmail.com",
        phone: 8745963258,
        gender: "male",
        bd: "2002-06-05",
        password: "Aarav@12345",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fname: "Khushi",
        lname: "mehra",
        email: "khushi@gmail.com",
        phone: 7969854896,
        gender: "female",
        bd: "2002-05-13",
        password: "Khushi@12345",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('User', {});
  },
};
