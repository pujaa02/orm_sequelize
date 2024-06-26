'use strict';
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import { AddressAttributes } from '../interface';
import User from './user';


@Table({ tableName: "Address", timestamps: true })
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
}