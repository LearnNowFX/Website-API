import { AxiosInstance } from "axios";
import { Inject, Injectable } from "@nestjs/common";
import { ProviderNames } from "@Constants/provider-names";

@Injectable()
export class RecaptchaService {
  private readonly api: AxiosInstance;

  constructor(@Inject(ProviderNames.RECAPTCHA) api: AxiosInstance) {
    this.api = api;
  }

  public async verify(token: string) {
    const response = await this.api
      .post("/siteverify", {}, { params: { secret: process.env.RECAPTCHA_PRIVATE_KEY, response: token } })
      .catch((err) => {
        console.log(err);
        return null;
      });

    return Boolean(response?.data?.success);
  }
}
