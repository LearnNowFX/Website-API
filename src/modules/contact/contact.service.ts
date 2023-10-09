import { Injectable } from "@nestjs/common";
import { Mailer } from "@Utilities/mailer.utility";
import { NEW_CONTACT_FORM_MESSAGE } from "@Constants/mail";
import { SendMessageRequestDTO } from "./dto/send-message.dto";

@Injectable()
export class ContactService {
  constructor() {}

  private formatMessage(data: SendMessageRequestDTO) {
    return `New contact form message from ${data.firstName} ${data.lastName} \n\n${data.message} \n\n${data.email}`;
  }

  public async send(data: SendMessageRequestDTO) {
    await Mailer.send(data.email, NEW_CONTACT_FORM_MESSAGE, this.formatMessage(data));
  }
}
