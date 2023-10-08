export interface ISequelizeException extends Error {
  name: string;
  original: { code: string };
  message: string;
  stack?: string;
}
