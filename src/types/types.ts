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

export type ProductsList = ProductProps[];
