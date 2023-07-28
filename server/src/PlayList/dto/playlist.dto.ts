import {ApiProperty} from "@nestjs/swagger";
import * as mongoose from "mongoose";

export class PlaylistDto{
    @ApiProperty({example: '64bfbc6fcb58f083a3c106e9', description: 'user ObjectId'})
    readonly user: mongoose.Types.ObjectId
    @ApiProperty({example: 'New PlayList', description: 'title of playlist'})
    readonly title: string
}