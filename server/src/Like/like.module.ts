import {Module} from "@nestjs/common";
import {LikeController} from "./like.controller";
import {LikeService} from "./like.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Like, LikeSchema} from "./like.schema";
import {JwtModule} from "@nestjs/jwt";
import {Song, SongSchema} from "../Song/song.schema";
import {Album, AlbumSchema} from "../Album/album.schema";


@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Like.name, schema: LikeSchema},
            {name: Song.name, schema: SongSchema},
            {name: Album.name, schema: AlbumSchema}
        ]),
        JwtModule.register({
            secret: process.env.PRIVATE_KEY || 'secret_key_musicTS',
            signOptions:{
                expiresIn: '24h'
            }
        })
    ],
    controllers: [LikeController],
    providers: [LikeService]
})

export class LikeModule{}