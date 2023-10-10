export interface IProduct {
  id: string;
  name: string;
  permalink: string;
  image: string;
  description: string;
  tags: string[];
  free: boolean;
  formatted_price: string;
}
