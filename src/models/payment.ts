'use strict';
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { PaymentAttributes } from '../interface';
import Orders from './order';


@Table({ tableName: "Payment", timestamps: true })
export default class Payment extends Model<PaymentAttributes> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    declare payment_id: number;

    @ForeignKey(() => Orders)
    @Column(DataType.INTEGER)
    declare order_id: number;

    @Column(DataType.STRING)
    declare payment_method: string;

    @Column(DataType.DECIMAL(4, 2))
    declare amount: number;

    @Column(DataType.STRING)
    declare status: string;

    @BelongsTo(() => Payment, {
        foreignKey: 'order_id',
      })
    declare payment: Payment;
}