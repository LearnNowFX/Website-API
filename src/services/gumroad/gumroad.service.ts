import { AxiosInstance } from "axios";
import { Inject, Injectable } from "@nestjs/common";
import { IProduct } from "@Interfaces/product.interface";
import { ProviderNames } from "@Constants/provider-names";
import { formatProductResponse } from "@Utilities/product.utility";
import { IGumroadResponse } from "./interfaces/gumroad-response.interface";

@Injectable()
export class GumroadService {
  private readonly api: AxiosInstance;

  constructor(@Inject(ProviderNames.GUMROAD) api: AxiosInstance) {
    this.api = api;
  }

  public async getProducts(): Promise<IGumroadResponse | null> {
    return this.api
      .get<IGumroadResponse>("/products", {
        params: {
          access_token: process.env.GUMROAD_ACCESS_TOKEN,
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        console.error(error);
        return null;
      });
  }

  public async getFormatedProducts(): Promise<IProduct[] | null> {
    const data = await this.getProducts();

    if (!data) {
      return null;
    }

    return formatProductResponse(data);
  }
}
