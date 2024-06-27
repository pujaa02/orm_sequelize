'use strict';
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { AddressAttributes } from '../interface';
import User from './user';


@Table({ tableName: "Address", timestamps: true,paranoid:true })
export default class Address extends Model<AddressAttributes> {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare address_id: number;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  declare user_id: number;

  @Column(DataType.STRING)
  declare city: string;

  @Column(DataType.STRING)
  declare state: string;

  @Column(DataType.STRING)
  declare street: string;

  @Column(DataType.INTEGER)
  declare pincode: number;

  @BelongsTo(() => User, {
    foreignKey: 'user_id',
  })
  declare user: User;
}