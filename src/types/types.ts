type ratingProps = {
  rate: number;
  count: number;
};

export type ProductProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ratingProps;
};

export type ProductListProps = ProductProps[];

export type BasicInfoProps = {
  username: string;
  password: string;
};

export type DetailInfoProps = {
  realname: string;
  phone: string;
  address: string;
};

export type UserInfoProps = {
  basic: BasicInfoProps;
  detail: DetailInfoProps;
  paymentPassword: string;
};
