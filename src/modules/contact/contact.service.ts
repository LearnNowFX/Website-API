import { Injectable } from "@nestjs/common";
import { SendMessageRequestDTO } from "./dto/send-message.dto";

@Injectable()
export class ContactService {
  constructor() {}

  public async send(data: SendMessageRequestDTO) {
    console.log(data);
  }
}
