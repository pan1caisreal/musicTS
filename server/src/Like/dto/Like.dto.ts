import {ApiProperty} from "@nestjs/swagger";
import mongoose from "mongoose";

export class LikeDto{
    @ApiProperty({example: '64c24b991681803c7265206d', description: 'song ObjectId'})
    song: mongoose.Types.ObjectId;

    @ApiProperty({example: '5f92cbf10cf217478ba93562', description: 'album ObjectId'})
    album: mongoose.Types.ObjectId;
}