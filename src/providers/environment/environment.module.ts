import { Module } from "@nestjs/common";
import { EnvironmentProvider } from "./environment.provider";

@Module({
  imports: [EnvironmentProvider],
  exports: [EnvironmentProvider],
})
export class EnvironmentModule {}
