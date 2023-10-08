import * as uuid from "uuid";
import { DEFAULT_CACHE_TTL } from "@Constants/cache";

interface IGlobalizedCacheManagerOptions {
  ttl?: number;
}

interface ICacheItem<T> {
  value: T;
  expiration: number;
}

export class GlobalizedCacheManager<T> {
  private ttl: number;
  private instanceId: string = "default";
  private cache: Map<string, ICacheItem<T>> = new Map<string, ICacheItem<T>>();
  private static instances: { [key: string]: GlobalizedCacheManager<any> } = {};

  constructor(options?: IGlobalizedCacheManagerOptions) {
    this.instanceId = uuid.v4();
    this.ttl = options?.ttl ?? DEFAULT_CACHE_TTL;

    GlobalizedCacheManager.instances[this.instanceId] = this;
  }

  public get(key: string): T | null {
    const item = this.cache.get(key);

    if (!item) {
      return null;
    }

    if (item.expiration < Date.now()) {
      this.cache.delete(key);
    }

    return item.value;
  }

  public set(key: string, value: T): void {
    const expiration = Date.now() + this.ttl;

    const item = {
      value,
      expiration,
    };

    this.cache.set(key, item);
  }

  public delete(key: string): void {
    this.cache.delete(key);
  }

  public clear(): void {
    this.cache.clear();
  }

  public static clear(): void {
    Object.keys(this.instances).forEach((instanceId) => {
      this.instances[instanceId].clear();
    });
  }
}
