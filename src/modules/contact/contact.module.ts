import { Module } from "@nestjs/common";
import { ContactService } from "./contact.service";
import { ContactController } from "./contact.controller";
import { RecaptchaModule } from "@Services/recaptcha/recaptcha.module";

@Module({
  imports: [RecaptchaModule],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
