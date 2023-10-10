import { IProduct } from "@Interfaces/product.interface";
import { IGumroadResponse } from "@Services/gumroad/interfaces/gumroad-response.interface";

export const formatProductResponse = (data: IGumroadResponse): IProduct[] => {
  const { products } = data;

  const active = products.filter((product) => {
    return product.published;
  });

  active.sort((a, b) => {
    return b.sales_count - a.sales_count;
  });

  return active.map((product) => {
    return {
      id: product.id,
      name: product.name,
      permalink: product.custom_permalink,
      description: product.description,
      formatted_price: product.formatted_price,
      url: product.short_url,
      free: product.price === 0,
      image: product.preview_url,
      tags: product.tags,
    };
  });
};
