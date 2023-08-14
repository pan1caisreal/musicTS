import {ApiProperty} from "@nestjs/swagger";
import {Song} from "../../Song/song.schema";

export class MusicTsPlaylistDto{
    @ApiProperty({example: 'Default playlist', description: 'title of playlist'})
    readonly title: string
    @ApiProperty({example: '["64da43defc1e979543a4fcda","64da42f9fc1e979543a4fcd6","64da4226fc1e979543a4fcd2"]',description: 'ObjectId`s of songs'})
    readonly songs: string[]
}