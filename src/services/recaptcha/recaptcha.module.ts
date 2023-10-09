import { Module } from "@nestjs/common";
import { RecaptchaService } from "./recaptcha.service";
import { RecaptchaApiConnection } from "./recaptcha.provider";

@Module({
  providers: [RecaptchaService, RecaptchaApiConnection],
  exports: [RecaptchaService, RecaptchaApiConnection],
})
export class RecaptchaModule {}
