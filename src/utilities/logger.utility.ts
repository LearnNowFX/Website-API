import { ServerEvent } from "@Constants/events";

const EVENT_COLOR = "\x1b[1m\x1b[32m%s\x1b[0m";
const WARN_COLOR = "\x1b[1m\x1b[33m%s\x1b[0m";
const ERROR_COLOR = "\x1b[1m\x1b[31m%s\x1b[0m";

export class Logger {
  public static event(event: ServerEvent, ...args: any): void {
    console.log(EVENT_COLOR, event, "\n", ...args);
  }

  public static warn(...args: any): void {
    console.warn(WARN_COLOR, ...args);
  }

  public static exception(...args: any): void {
    console.error(ERROR_COLOR, ...args);
  }
}
