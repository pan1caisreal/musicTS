import {Module} from "@nestjs/common";
import {SongModule} from "./Song/song.module";
import {MongooseModule} from "@nestjs/mongoose";


@Module({
    imports: [
        MongooseModule.forRoot(''),
        SongModule
    ]
})

export class AppModule{

}