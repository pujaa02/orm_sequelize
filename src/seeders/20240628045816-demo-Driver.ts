'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert('Driver', [
      {
        name: "Koushtubh Acharya",
        phone: "7930115555",
        email: "koushtubh@gmail.com",
        location: "Lal Darwaja,Ahmedabad,Gujarat,380001",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Manish Kumar Dey",
        phone: "7922774647",
        email: "manish@gmail.com",
        location: "Swaminarayan Mandir Rd, Badri Mohalla, Moghul Wada,Vadodara,Gujarat,390017",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Saurabh Kalla",
        phone: "9737507000",
        email: "saurabh@gmail.com",
        location: "1/2 Gitanjali Complex, Navrangpura,Ahmedabad,Gujarat,380013",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Srinivasan Choudhry",
        phone: "7922862591",
        email: "srinivasan@gmail.com",
        location: "Adajan Gam,Surat,Gujarat,395009",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Yogesh Verma",
        phone: "9925243337 ",
        email: "yogesh@gmail.com",
        location: "Airport Cir,Ahmedabad,Gujarat,382475",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('Driver', {});
  },
};
