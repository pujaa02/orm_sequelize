'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert('Payment', [
      {
        order_id: 1,
        payment_method: "upi",
        amount: 450,
        status: "success",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 2,
        payment_method: "upi",
        amount: 250,
        status: "success",       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 3,
        payment_method: "upi",
        amount: 625,
        status: "success",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 4,
        payment_method: "upi",
        amount: 748,
        status: "success",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 5,
        payment_method: "upi",
        amount: 250,
        status: "success",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 6,
        payment_method: "upi",
        amount: 250,
        status: "success",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 7,
        payment_method: "upi",
        amount: 421,
        status: "success",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 8,
        payment_method: "upi",
        amount: 325,
        status: "success",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 9,
        payment_method: "upi",
        amount: 394,
        status: "success",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 10,
        payment_method: "upi",
        amount: 495,
        status: "success",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 11,
        payment_method: "upi",
        amount: 314,
        status: "success",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 12,
        payment_method: "upi",
        amount: 250,
        status: "success",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 13,
        payment_method: "upi",
        amount: 180,
        status: "success",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 14,
        payment_method: "upi",
        amount: 250,
        status: "success",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('Payment', {});
  },
};
