import { Injectable } from "@nestjs/common";
import { IProduct } from "@Interfaces/product.interface";
import { GumroadService } from "@Services/gumroad/gumroad.service";
import { GlobalizedCacheManager } from "@Utilities/cache-manager.utility";

@Injectable()
export class ProductService {
  private readonly cache: GlobalizedCacheManager<IProduct[]>;

  constructor(private readonly gumroadService: GumroadService) {
    this.cache = new GlobalizedCacheManager<IProduct[]>();
  }

  private async getAll(): Promise<IProduct[] | null> {
    return this.gumroadService.getFormatedProducts();
  }

  public async getAllFromCache() {
    const cached = this.cache.get("*");

    if (cached) {
      return cached;
    }

    const data = await this.getAll();

    if (data) {
      this.cache.set("*", data);
    }

    return data;
  }
}
