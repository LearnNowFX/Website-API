import { Provider } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";
import { ProviderNames } from "src/constants/provider-names";

export const YoutubeApiConnection: Provider = {
  provide: ProviderNames.YOUTUBE,
  useFactory: () => {
    const YOUTUBE_URL = process.env.YOUTUBE_URL;

    const api: AxiosInstance = axios.create({
      baseURL: YOUTUBE_URL,
    });

    return api;
  },
};
