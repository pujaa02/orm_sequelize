'use strict';
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import { MenuAttributes } from '../interface';
import Restaurants from './Restaurants';


@Table({ tableName: "Menu", timestamps: true })
export default class Menu extends Model<MenuAttributes> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    declare menu_id: number;

    @ForeignKey(() => Restaurants)
    @Column(DataType.INTEGER)
    declare restaurant_id: number;

    @Column(DataType.STRING)
    declare item_name: string;

    @Column(DataType.INTEGER)
    declare price: number;
}