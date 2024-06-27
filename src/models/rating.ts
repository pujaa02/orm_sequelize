'use strict';
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsToMany, BelongsTo } from 'sequelize-typescript';
import { RatingAttributes } from '../interface';
import User from './user';
import Restaurants from './Restaurant';
import Restaurant from './Restaurant';


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

    @BelongsToMany(() => User, () => Restaurant)
    declare user: User[];

    @BelongsTo(() => Restaurant)
    declare restaurant: Restaurant;
}