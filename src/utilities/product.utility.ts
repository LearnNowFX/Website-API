import { IProduct } from "@Interfaces/product.interface";
import { IGumroadResponse } from "@Services/gumroad/interfaces/gumroad-response.interface";

export const formatProductResponse = (data: IGumroadResponse): IProduct[] => {
  const { products } = data;

  return products.map((product) => {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      formatted_price: product.formatted_price,
      url: product.short_url,
      image: product.preview_url,
      tags: product.tags,
    };
  });
};
