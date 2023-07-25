import {Module} from "@nestjs/common";
import {userController} from "./user.controller";
import {userService} from "./user.service";
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "./user.schema";




@Module({
    imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
    controllers: [userController],
    providers: [userService],
    exports: [userService]
})

export class UserModule{}