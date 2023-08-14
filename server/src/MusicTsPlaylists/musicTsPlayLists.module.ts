import {Module} from "@nestjs/common";
import mongoose from "mongoose";
import {MongooseModule} from "@nestjs/mongoose";
import {musicTsPlaylist, musicTsPlaylistSchema} from "./musicTsPlayLists.schema";
import {MusicTsPlayListsController} from "./musicTsPlayLists.controller";
import {MusicTsPlayListsService} from "./musicTsPlayLists.service";
import {FileService} from "../files/file.service";

@Module({
    imports: [MongooseModule.forFeature([{name: musicTsPlaylist.name, schema: musicTsPlaylistSchema}])],
    controllers: [MusicTsPlayListsController],
    providers: [MusicTsPlayListsService,FileService]
})


export class MusicTsPlayListsModule{}