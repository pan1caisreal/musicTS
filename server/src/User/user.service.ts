import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "./user.schema";
import {Model} from "mongoose";
import {UserDto} from "./dto/user.dto";


@Injectable()

export class userService{
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async createUser(dto: UserDto){
        const user = await this.userModel.create(dto)
        return user
    }

    async getAllUser(){
        const users = await this.userModel.find()
        return users
    }

    async getUserByEmail(email: string): Promise<User>{
        const user = await this.userModel.findOne({email: email})
        return user
    }

}