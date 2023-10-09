import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { ProductModule } from "@Modules/product/product.module";
import { TutorialModule } from "@Modules/tutorial/tutorial.module";
import { DatabaseModule } from "@Providers/database/database.module";
import { EnvironmentModule } from "@Providers/environment/environment.module";

@Module({
  imports: [DatabaseModule, EnvironmentModule, TutorialModule, ProductModule],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
