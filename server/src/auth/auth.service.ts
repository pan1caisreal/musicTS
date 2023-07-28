import {HttpException, HttpStatus, Injectable, Post, UnauthorizedException} from '@nestjs/common';
import {UserDto} from "../User/dto/user.dto";
import {userService} from "../User/user.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from "bcryptjs"
import {User} from "../User/user.schema";


@Injectable()
export class AuthService {

    constructor(private userService: userService,
                private jwtService: JwtService) {
    }

    async login(userDto: UserDto){
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }

    async registration(userDto: UserDto){
        const candidate = await this.userService.getUserByEmail(userDto.email)
        if(candidate){
            throw new HttpException("User with this email already exists", HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5)
        const user = await this.userService.createUser({...userDto, password: hashPassword})
        return this.generateToken(user)
    }

    private async generateToken(user: User){
        const payload = {email: user.email, username: user.username, id: user.id}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: UserDto):Promise<User> {
        const user = await this.userService.getUserByEmail(userDto.email)
        if(user){
            const passwordEquals = await bcrypt.compare(userDto.password, user.password)
            if(passwordEquals){
                return user
            }
        }
        throw new UnauthorizedException({message: "Incorrect email or password"})
    }

    async checkAuth(user: any){
        return this.generateToken(user)
    }
}
