import { Request } from "express";
import { RecaptchaService } from "@Services/recaptcha/recaptcha.service";
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class RecaptchaGuard implements CanActivate {
  constructor(private readonly recaptchaService: RecaptchaService) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const httpConnection = context.switchToHttp();
    const request: Request = httpConnection.getRequest();

    const token = request.headers["x-recaptcha-token"] as string;

    if (!token) {
      return false;
    }

    const isHuman = await this.recaptchaService.verify(token);

    return isHuman;
  }
}
