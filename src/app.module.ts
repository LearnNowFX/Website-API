import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { DatabaseModule } from "@Providers/database/database.module";
import { EnvironmentModule } from "@Providers/environment/environment.module";

@Module({
  imports: [DatabaseModule, EnvironmentModule],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
