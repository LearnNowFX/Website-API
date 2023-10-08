import { AxiosInstance } from "axios";
import { Inject, Injectable } from "@nestjs/common";
import { ProviderNames } from "@Constants/provider-names";
import { extractVideoITitleFromYouTubeHTML, extractVideoIdsFromYouTubeHTML } from "@Utilities/youtube.utility";
import { IVideoDetails } from "@Interfaces/video-details.interface";

@Injectable()
export class YoutubeService {
  private readonly api: AxiosInstance;

  constructor(@Inject(ProviderNames.YOUTUBE) api: AxiosInstance) {
    this.api = api;
  }

  public async getChannelHTML(channelId: string) {
    const response = await this.api.get(`/${channelId}`);
    return response.data;
  }

  public async getVideoHTML(videoId: string) {
    const response = await this.api.get(`/watch?v=${videoId}`);

    return response.data;
  }

  public async getVideoIdsByChannelId(channelId: string) {
    const HTML = await this.getChannelHTML(channelId);

    return extractVideoIdsFromYouTubeHTML(HTML);
  }

  public async getVideoTitleById(videoId: string) {
    const HTML = await this.getVideoHTML(videoId);

    return extractVideoITitleFromYouTubeHTML(HTML);
  }

  public async getAllVideoDataFromChannel(channelId: string): Promise<IVideoDetails[]> {
    const ids = await this.getVideoIdsByChannelId(channelId);

    const promises = ids.map(async (id) => {
      const title = await this.getVideoTitleById(id);

      return {
        id,
        title,
      };
    });

    const videoData = await Promise.all(promises);

    return videoData;
  }
}
