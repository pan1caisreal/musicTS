import {Body, Controller, Get, Post} from "@nestjs/common";
import {UserDto} from "./dto/user.dto";
import {userService} from "./user.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./user.schema";

@ApiTags('Users')
@Controller('/user')

export class userController{

    constructor(private userService: userService) {}
    @ApiOperation({summary:'Create user'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: UserDto ){
        return this.userService.createUser(userDto)
    }
    @ApiOperation({summary:'Get all users'})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getAll(){
        return this.userService.getAllUser()
    }
}