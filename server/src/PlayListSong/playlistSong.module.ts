import {Module} from "@nestjs/common";
import {PlaylistSongController} from "./playlistSong.controller";
import {PlaylistSongService} from "./playlistSong.service";
import {MongooseModule} from "@nestjs/mongoose";
import {PlaylistSong, PlaylistSongSchema} from "./playlistSong.schema";



@Module({
    imports: [MongooseModule.forFeature([{name: PlaylistSong.name, schema: PlaylistSongSchema}])],
    controllers: [PlaylistSongController],
    providers: [PlaylistSongService]
})

export class PlaylistSongModule{}