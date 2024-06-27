'use strict';
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import { RestaurantAttributes } from '../interface';
import Order from './order';
import Rating from './rating';
import Menu from './menu';


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

    @HasMany(() => Order)
    declare orders: Order[];

    @HasMany(() => Rating)
    declare rating: Rating[];

    @HasMany(() => Menu)
    declare menu: Menu[];
}