import { Module } from "@nestjs/common";
import { TutorialService } from "./tutorial.service";
import { TutorialController } from "./tutorial.controller";
import { YoutubeModule } from "@Services/youtube/youtube.module";
import { YoutubeService } from "@Services/youtube/youtube.service";

@Module({
  imports: [YoutubeModule],
  controllers: [TutorialController],
  providers: [TutorialService, YoutubeService],
})
export class TutorialModule {}
