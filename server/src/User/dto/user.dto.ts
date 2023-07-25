import {ApiProperty} from "@nestjs/swagger";

export class UserDto{
    @ApiProperty({example: "Tril", description: "username"})
    readonly username;
    @ApiProperty({example: "user@mail.ru", description: "user email"})
    readonly email;
    @ApiProperty({example: "123456", description: "user password"})
    readonly password;
}