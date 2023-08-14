import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {ApiProperty} from "@nestjs/swagger";
import {Song, SongSchema} from "../Song/song.schema";
import * as mongoose from "mongoose";

export type musicTsPlaylistDocument = HydratedDocument<musicTsPlaylist>;

@Schema()
export class musicTsPlaylist {
    @ApiProperty({example: 'Default playlist', description: 'title of playlist'})
    @Prop()
    title: string;

    @ApiProperty({example: 'MusicTs', description: 'author of playlist'})
    @Prop({default: 'MusicTs'})
    author: string;

    @ApiProperty({example: '["64da43defc1e979543a4fcda","64da42f9fc1e979543a4fcd6","64da4226fc1e979543a4fcd2"]',description: 'ObjectId`s of songs'})
    @Prop({type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }]})
    songs: Song[];

    @ApiProperty({example: 'cover_url', description:"picture"})
    @Prop()
    cover_url: string;
}

export const musicTsPlaylistSchema = SchemaFactory.createForClass(musicTsPlaylist);