import {Module} from "@nestjs/common";
import {SongModule} from "./Song/song.module";
import {MongooseModule} from "@nestjs/mongoose";


@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://pan1ca_danya:95143961597758@cluster0.qjfdgmb.mongodb.net/?retryWrites=true&w=majority'),
        SongModule
    ]
})

export class AppModule{

}