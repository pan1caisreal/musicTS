import {Module} from "@nestjs/common";
import {SongController} from "./song.controller";
import {SongService} from "./song.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Song, SongSchema} from "./song.schema";
import {FileService} from "../files/file.service";


@Module({
    imports: [MongooseModule.forFeature([{name: Song.name, schema: SongSchema}])],
    controllers: [SongController],
    providers: [SongService,FileService]
})

export class SongModule{}