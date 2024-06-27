export interface UserAttributes {
  user_id?: number;
  fname: string;
  lname: string;
  email: string;
  phone: number;
  gender: string;
  bd: Date;
  password: string;
  access_key?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface RestaurantAttributes {
  restaurant_id?: number;
  name: string;
  phone: number;
  address: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface OrderAttributes {
  order_id?: number;
  user_id: number;
  restaurant_id: number;
  order_total: number,
  delivery_status: string;
  driver_id: number;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface RatingAttributes {
  rate_id?: number;
  user_id: number;
  restaurant_id: number;
  rating: number;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface PaymentAttributes {
  payment_id?: number;
  order_id: number;
  payment_method: string;
  amount: number;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface DriverAttributes {
  driver_id?: number;
  name: string;
  phone: number;
  email: string;
  location: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface MenuAttributes {
  menu_id?: number;
  restaurant_id: number;
  item_name: string;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface AddressAttributes {
  address_id?: number;
  user_id: number;
  city: string;
  state: string;
  street: string;
  pincode: number;
  createdAt?: Date;
  updatedAt?: Date;
}