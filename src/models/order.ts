'use strict';
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, HasOne } from 'sequelize-typescript';
import { OrderAttributes } from '../interface';
import Restaurant from './Restaurant';
import User from './user';
import Driver from './driver';
import Payment from './payment';
import { NonAttribute } from 'sequelize';


@Table({ tableName: "Order", timestamps: true })
export default class Order extends Model<OrderAttributes> {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare order_id: number;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  declare user_id: number;

  @ForeignKey(() => Restaurant)
  @Column(DataType.INTEGER)
  declare restaurant_id: number;

  @Column(DataType.DECIMAL(4, 2))
  declare order_total: number;

  @Column(DataType.STRING)
  declare delivery_status: string;

  @ForeignKey(() => Driver)
  @Column(DataType.INTEGER)
  declare driver_id: number;

  @BelongsTo(() => User)
  declare user: User;

  @BelongsTo(() => Restaurant)
  declare restaurant: Restaurant;

  @BelongsTo(() => Driver)
  declare driver: Driver;

  @HasOne(() => Payment, {
    foreignKey: 'payment_id',
  })
  declare payment?: NonAttribute<Payment>;
}