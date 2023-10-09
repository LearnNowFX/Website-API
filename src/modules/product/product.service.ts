import { Injectable } from "@nestjs/common";
import { IProduct } from "@Interfaces/product.interface";
import { GumroadService } from "@Services/gumroad/gumroad.service";
import { GlobalizedCacheManager } from "@Utilities/cache-mamager.utility";

@Injectable()
export class ProductService {
  private readonly cache: GlobalizedCacheManager<IProduct[]>;

  constructor(private readonly gumroadService: GumroadService) {
    this.cache = new GlobalizedCacheManager<IProduct[]>();
  }

  private async getAll(): Promise<IProduct[]> {
    return this.gumroadService.getFormatedProducts();
  }

  public async getAllFromCache() {
    const cached = this.cache.get("*");

    if (cached) {
      return cached;
    }

    const all = await this.getAll();

    this.cache.set("*", all);

    return all;
  }
}
