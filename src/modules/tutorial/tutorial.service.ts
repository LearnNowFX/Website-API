import { Injectable } from "@nestjs/common";
import { YoutubeService } from "@Services/youtube/youtube.service";

@Injectable()
export class TutorialService {
  constructor(private readonly youtubeService: YoutubeService) {}

  public async getAll() {
    return await this.youtubeService.getAllVideoDataFromChannel(process.env.YOUTUBE_CHANNEL_ID as string);
  }
}
