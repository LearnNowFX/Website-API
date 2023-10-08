import { CanActivate, Injectable } from "@nestjs/common";

@Injectable()
export class DevGuard implements CanActivate {
  public canActivate(): boolean {
    return process.env.NODE_ENV === "development";
  }
}
