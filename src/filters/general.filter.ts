import { GeneralMessages } from "@Constants/messages";
import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";

@Catch()
export class GeneralFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse();

    console.log("Unhandled Exception: ", exception);

    const status = HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status).json({
      status,
      success: false,
      message: GeneralMessages.SOMETHING_WENT_WRONG,
    });
  }
}
