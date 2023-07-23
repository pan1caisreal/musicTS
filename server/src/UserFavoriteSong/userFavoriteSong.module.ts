import {Module} from "@nestjs/common";
import {userFavoriteSongController} from "./userFavoriteSong.controller";
import {userFavoriteSongService} from "./userFavoriteSong.service";
import {MongooseModule} from "@nestjs/mongoose";
import {userFavoriteSong, userFavoriteSongSchema} from "./userFavoriteSong.schema";




@Module({
    imports: [MongooseModule.forFeature([{name: userFavoriteSong.name, schema: userFavoriteSongSchema}])],
    controllers: [userFavoriteSongController],
    providers: [userFavoriteSongService]
})

export class UserFavoriteSongModule{}