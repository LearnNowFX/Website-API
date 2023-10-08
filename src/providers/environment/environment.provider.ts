import Joi from "joi";
import { ConfigModule } from "@nestjs/config";

const schema = Joi.object({
  DB_HOST: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_PASS: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_USER: Joi.string().required(),
  DB_SSL: Joi.boolean().default(false),
  PORT: Joi.number().default(3000),
  NODE_ENV: Joi.string().valid("development", "production", "test").default("production"),
});

export const EnvironmentProvider = ConfigModule.forRoot({
  isGlobal: true,
  validationSchema: schema,
});
