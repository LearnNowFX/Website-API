import { Provider } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";
import { ProviderNames } from "src/constants/provider-names";

export const GumroadApiConnection: Provider = {
  provide: ProviderNames.GUMROAD,
  useFactory: () => {
    const GUMROAD_API_URL = process.env.GUMROAD_API_URL;

    const api: AxiosInstance = axios.create({
      baseURL: GUMROAD_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return api;
  },
};
