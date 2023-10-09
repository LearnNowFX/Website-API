import { Provider } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";
import { ProviderNames } from "src/constants/provider-names";

export const RecaptchaApiConnection: Provider = {
  provide: ProviderNames.RECAPTCHA,
  useFactory: () => {
    const RECATPCHA_API_URL = process.env.RECATPCHA_API_URL;

    const api: AxiosInstance = axios.create({
      baseURL: RECATPCHA_API_URL,
    });

    return api;
  },
};
