import {ApiProperty} from "@nestjs/swagger";
import mongoose from "mongoose";


export class SongDto{
    @ApiProperty({example: 'Make Me Miss You', description:"song title"})
    title: string;
    @ApiProperty({example: 'BRIDGE', description:"artist"})
    artist: string;
    @ApiProperty({example: 'some text', description:"music text"})
    text:string;
    @ApiProperty({example: "Rap", description: "genre"})
    genre: string;
    @ApiProperty({example: "2:32", description: "duration"})
    duration: string;
    @ApiProperty({ example: '5f92cbf10cf217478ba93561', description: "ID of the album (optional)", required: false })
    album?:mongoose.Types.ObjectId;
}