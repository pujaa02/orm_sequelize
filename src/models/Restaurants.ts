'use strict';
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { RestaurantAttributes } from '../interface';


@Table({ tableName: "Restaurant", timestamps: true })
export default class Restaurant extends Model<RestaurantAttributes> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    declare restaurant_id: number;

    @Column(DataType.STRING)
    declare name: string;

    @Column(DataType.BIGINT)
    declare phone: number;

    @Column(DataType.STRING)
    declare address: string;
}