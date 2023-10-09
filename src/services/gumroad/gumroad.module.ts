import { Module } from "@nestjs/common";
import { GumroadService } from "./gumroad.service";
import { GumroadApiConnection } from "./gumroad.provider";

@Module({
  providers: [GumroadService, GumroadApiConnection],
  exports: [GumroadService, GumroadApiConnection],
})
export class GumroadModule {}
