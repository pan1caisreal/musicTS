import {ApiProperty} from "@nestjs/swagger";
import mongoose from "mongoose";

export class playlistSongDto{
    @ApiProperty({example: '64c39d587a43f3ad459059c8', description: 'playlist ObjectId'})
    playlist_id: mongoose.Types.ObjectId
    @ApiProperty({example: '64c24b991681803c7265206d', description: 'song ObjectId'})
    song_id: mongoose.Types.ObjectId
}