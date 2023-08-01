import {Module} from "@nestjs/common";
import {SongModule} from "./Song/song.module";
import {MongooseModule} from "@nestjs/mongoose";
import {UserModule} from "./User/user.module";
import { AuthModule } from './auth/auth.module';
import {FilesModule} from "./files/files.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path'
import {AlbumModule} from "./Album/album.module";
import {PlaylistModule} from "./PlayList/playlist.module";
import {PlaylistSongModule} from "./PlayListSong/playlistSong.module";
import {LikeModule} from "./Like/like.module";
import {spotifyModule} from "./SpotifyApi/spotify.module";

@Module({
    imports: [
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname,'..','static'),}),
        MongooseModule.forRoot('mongodb+srv://pan1ca_danya:95143961597758@cluster0.qjfdgmb.mongodb.net/?retryWrites=true&w=majority'),
        SongModule,
        UserModule,
        AuthModule,
        FilesModule,
        AlbumModule,
        PlaylistModule,
        PlaylistSongModule,
        LikeModule,
        spotifyModule,
    ]
})

export class AppModule{

}