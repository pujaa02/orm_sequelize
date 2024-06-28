'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert('Restaurant', [
      {
        name: "SpiceCraft",
        address: "1/2 Gitanjali Complex, Navrangpura,Ahmedabad,Gujarat,380013",
        phone: "8974859623",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ascent: Alpine-Style Cuisine",
        address: "Bombay Conductor Rd, Phase I, GIDC Vatwa,Ahmedabad,Gujarat,382445",
        phone: "7896584120",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Red Stiletto Restaurant",
        address: "Swami Vivekananda Rd, Raikhad,Ahmedabad,Gujarat,380001",
        phone: "9965874521",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "The Winstonian",
        address: "GIDC Kabilpore,Navsari,Gujarat,396427",
        phone: "8974521596",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "The Nouveau Table",
        address: "Ganesh Circle, Mangalpura,Anand,Gujarat,388001",
        phone: "7979854628",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('Restaurant', {});
  },
};
