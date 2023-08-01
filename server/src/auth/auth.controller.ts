import {Body, Controller, Get, Post, UseGuards, Request, Header} from '@nestjs/common';
import {ApiBearerAuth, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {UserDto} from "../User/dto/user.dto";
import {AuthService} from "./auth.service";
import {User} from "../User/user.schema";
import {JwtAuthGuard} from "./jwt-auth.guard";

@ApiTags('Auth')
@Controller('/auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }
    @ApiOperation({summary: "User login"})
    @ApiResponse({status: 200, type: User})
    @Post('/login')
    login(@Body() userDto: UserDto){
        return this.authService.login(userDto)
    }

    @ApiOperation({summary: "User registration"})
    @ApiResponse({status: 200, type: User})
    @Post('/registration')
    registration(@Body() userDto: UserDto){
        return this.authService.registration(userDto)
    }

    @ApiOperation({summary: "User check auth"})
    @ApiBearerAuth()
    @ApiResponse({status: 200, type: User})
    @Get('/check')
    @UseGuards(JwtAuthGuard)
    async check(@Request() req: any){
        return this.authService.checkAuth(req.user)
    }
}
