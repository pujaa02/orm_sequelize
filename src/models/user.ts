'use strict';
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, HasMany, BelongsToMany } from 'sequelize-typescript';
import { UserAttributes } from '../interface';
import { Optional } from 'sequelize';
import Order from './order';
import Rating from './rating';
import Restaurant from './Restaurant';
import Address from './address';

interface UserCreationAttributes extends Optional<UserAttributes, "user_id"> { }

@Table({ tableName: "User", timestamps: true })
export default class User extends Model<UserAttributes, UserCreationAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare user_id: number;

  @Column(DataType.STRING)
  declare fname: string;

  @Column(DataType.STRING)
  declare lname: string;

  @Column(DataType.STRING)
  declare email: string;

  @Column(DataType.BIGINT)
  declare phone: number;

  @Column(DataType.STRING)
  declare gender: string;

  @Column(DataType.DATEONLY)
  declare bd: Date;

  @Column({ type: DataType.STRING, allowNull: true })
  declare password: string | null;

  @Column({ type: DataType.STRING, allowNull: true })
  declare access_key: string | null;

  @Column({ type: DataType.INTEGER, allowNull: true, defaultValue: 0 })
  declare isdeleted: number | null;

  @HasMany(() => Order)
  declare orders: Order[];

  @HasMany(() => Address)
  declare address: Address[];

  @BelongsToMany(() => Rating, () => Restaurant)
  declare ratings: Rating[];
}
