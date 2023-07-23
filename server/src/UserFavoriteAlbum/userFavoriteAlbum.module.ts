import {Module} from "@nestjs/common";
import {userFavoriteAlbumController} from "./userFavoriteAlbum.controller";
import {userFavoriteAlbumService} from "./userFavoriteAlbum.service";
import {MongooseModule} from "@nestjs/mongoose";
import {userFavoriteAlbum, userFavoriteAlbumSchema} from "./userFavoriteAlbum.schema";





@Module({
    imports: [MongooseModule.forFeature([{name: userFavoriteAlbum.name, schema: userFavoriteAlbumSchema}])],
    controllers: [userFavoriteAlbumController],
    providers: [userFavoriteAlbumService]
})

export class userFavoriteAlbumModule{}