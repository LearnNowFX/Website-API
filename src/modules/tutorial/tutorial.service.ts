import { Injectable } from "@nestjs/common";
import { YoutubeService } from "@Services/youtube/youtube.service";
import { IVideoDetails } from "@Interfaces/video-details.interface";
import { GlobalizedCacheManager } from "@Utilities/cache-manager.utility";

@Injectable()
export class TutorialService {
  private readonly cache: GlobalizedCacheManager<IVideoDetails[]>;

  constructor(private readonly youtubeService: YoutubeService) {
    this.cache = new GlobalizedCacheManager<IVideoDetails[]>();
  }

  private async getAll() {
    return await this.youtubeService.getAllVideoDataFromChannel(process.env.YOUTUBE_CHANNEL_ID as string);
  }

  public async getAllFromCache() {
    const cached = this.cache.get("*");

    if (cached) {
      return cached;
    }

    const data = await this.getAll();

    if (data && data.length > 0) {
      this.cache.set("*", data);
    }

    return data;
  }
}
