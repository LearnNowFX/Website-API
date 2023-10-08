import pg from "pg";
import { Provider } from "@nestjs/common";
import { ServerEvent } from "@Constants/events";
import { Sequelize } from "sequelize-typescript";
import { Logger } from "@Utilities/logger.utility";
import { GeneralMessages } from "@Constants/messages";
import { ProviderNames } from "@Constants/provider-names";

export const DatabaseProvider: Provider = {
  provide: ProviderNames.SEQUELIZE,
  useFactory: async () => {
    const SSL = process.env.DB_SSL === "true";
    const port = process.env.DB_PORT || 5432;

    const sequelize = new Sequelize({
      ssl: SSL,
      port: Number(port),
      dialectModule: pg,
      dialect: "postgres",
      logging: console.log,
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      dialectOptions: {
        ssl: {
          require: SSL,
          rejectUnauthorized: false,
        },
      },
    });

    sequelize.addModels([]);

    await sequelize
      .sync()
      .then(() => {
        Logger.event(ServerEvent.DATABASE_CONNECTED, GeneralMessages.CONNECTED_TO_DATABASE);
      })
      .catch((error) => {
        Logger.exception(GeneralMessages.COULD_NOT_CONNECT_TO_DATABASE, error);
      });

    return sequelize;
  },
};
