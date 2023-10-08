import { Module } from "@nestjs/common";
import { YoutubeService } from "./youtube.service";
import { YoutubeApiConnection } from "./youtube.provider";

@Module({
  providers: [YoutubeService, YoutubeApiConnection],
  exports: [YoutubeService, YoutubeApiConnection],
})
export class YoutubeModule {}
