import { IVideoDetails } from "@Interfaces/video-details.interface";
import { Injectable } from "@nestjs/common";
import { YoutubeService } from "@Services/youtube/youtube.service";
import { GlobalizedCacheManager } from "@Utilities/cache-mamager.utility";

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

    const all = await this.getAll();

    this.cache.set("*", all);

    return all;
  }
}
