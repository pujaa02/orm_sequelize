'use strict';
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import { RatingAttributes } from '../interface';
import User from './user';
import Restaurants from './Restaurants';


@Table({ tableName: "Rating", timestamps: true })
export default class Rating extends Model<RatingAttributes> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    declare rate_id: number;

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    declare user_id: number;

    @ForeignKey(() => Restaurants)
    @Column(DataType.INTEGER)
    declare restaurant_id: number;

    @Column(DataType.DECIMAL(4, 2))
    declare rating: number;
}