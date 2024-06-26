'use strict';
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import { OrderAttributes } from '../interface';
import Restaurants from './Restaurants';
import User from './user';
import Driver from './drivers';


@Table({ tableName: "Order", timestamps: true })
export default class Order extends Model<OrderAttributes> {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare order_id: number;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  declare user_id: number;

  @ForeignKey(() => Restaurants)
  @Column(DataType.INTEGER)
  declare restaurant_id: number;

  @Column(DataType.DECIMAL(4, 2))
  declare order_total: number;

  @Column(DataType.STRING)
  declare delivery_status: string;

  @ForeignKey(() => Driver)
  @Column(DataType.INTEGER)
  declare driver_id: number;
}