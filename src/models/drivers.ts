'use strict';
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { PaymentAttributes } from '../interface';


@Table({ tableName: "Driver", timestamps: true })
export default class Driver extends Model<PaymentAttributes> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    declare driver_id: number;

    @Column(DataType.STRING)
    declare name: string;

    @Column(DataType.BIGINT)
    declare phone: number;

    @Column(DataType.STRING)
    declare email: string;

    @Column(DataType.STRING)
    declare location: string;
}