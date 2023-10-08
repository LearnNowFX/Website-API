import helmet from "helmet";
import morgan from "morgan";
import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";
import { ServerEvent } from "@Constants/events";
import { HttpFilter } from "@Filters/http.filter";
import { Logger } from "@Utilities/logger.utility";
import { GeneralFilter } from "@Filters/general.filter";

async function main() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix("api", { exclude: ["/"] });

  app.useGlobalFilters(new GeneralFilter());
  app.useGlobalFilters(new HttpFilter());

  app.use(helmet());
  app.use(morgan("dev"));

  const port = process.env.PORT || 3000;

  await app.listen(port, () => {
    Logger.event(ServerEvent.SERVER_STARTED, `Licensing Server is listening on port ${port}`);
  });
}

main();
