import { IsNotEmpty, IsString, Min, IsEmail } from "class-validator";

export class SendMessageRequestDTO {
  @IsNotEmpty()
  @IsString()
  @Min(2)
  public firstName: string;

  @IsNotEmpty()
  @IsString()
  @Min(2)
  public lastName: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  @Min(5)
  public message: string;
}
