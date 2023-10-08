import { Logger } from "./logger.utility";
import { PostgresErrorCodes } from "@Constants/postgres-errors";
import { ISequelizeException } from "@Interfaces/sequelize-error.interface";
import { BadRequestException, ConflictException, InternalServerErrorException } from "@nestjs/common";

export function handleSequelizeException(err: ISequelizeException): void {
  Logger.exception(err);
  const code = parseInt(err?.original?.code);

  if (code === PostgresErrorCodes.UNIQUE_VIOLATION) {
    Logger.exception("Unique constraint violation in sequelize");
    throw new ConflictException();
  }

  if (code in PostgresErrorCodes) {
    Logger.exception("Bad request to sequelize");
    throw new BadRequestException();
  }

  Logger.exception("Internal server error in sequelize");
  throw new InternalServerErrorException();
}
