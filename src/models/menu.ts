'use strict';
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { MenuAttributes } from '../interface';
import Restaurants from './Restaurant';


@Table({ tableName: "Menu", timestamps: true ,paranoid:true})
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

    @BelongsTo(() => Restaurants, {
        foreignKey: 'restaurant_id',
      })
    declare restaurants: Restaurants;
}