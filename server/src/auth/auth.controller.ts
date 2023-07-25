import {Body, Controller, Post} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {UserDto} from "../User/dto/user.dto";
import {AuthService} from "./auth.service";

@ApiTags('Auth')
@Controller('/auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @Post('/login')
    login(@Body() userDto: UserDto){
        return this.authService.login(userDto)
    }

    @Post('/registration')
    registration(@Body() userDto: UserDto){
        return this.authService.registration(userDto)
    }
}
