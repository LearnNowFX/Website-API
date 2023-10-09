import { ContactService } from "./contact.service";
import { RecaptchaGuard } from "@Guards/recaptcha.guard";
import { SendMessageRequestDTO } from "./dto/send-message.dto";
import { Body, Controller, Post, UseGuards } from "@nestjs/common";

@UseGuards(RecaptchaGuard)
@Controller("contact")
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post("/")
  public send(@Body() data: SendMessageRequestDTO) {
    return this.contactService.send(data);
  }
}
