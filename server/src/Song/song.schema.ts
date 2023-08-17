import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import {Album} from "../Album/album.schema";
import {ApiProperty} from "@nestjs/swagger";

export type SongDocument = HydratedDocument<Song>;

@Schema()
export class Song {
    @ApiProperty({example: 'Make Me Miss You', description:"song title"})
    @Prop()
    title: string;

    @ApiProperty({example: 'BRIDGE', description:"artist"})
    @Prop()
    artist: string;

    @ApiProperty({example: 'some text', description:"music text"})
    @Prop()
    text: string;

    @ApiProperty({example: '23', description:"album_id(def=null)"})
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Album',default: null})
    album: mongoose.Schema.Types.ObjectId | null;

    @ApiProperty({example: '2300', description:"listen count"})
    @Prop()
    listens_count: number;

    @ApiProperty({example: 'Rap', description:"genre"})
    @Prop()
    genre: string;

    @ApiProperty({example: 'cover_url', description:"picture"})
    @Prop()
    cover_url: string;

    @ApiProperty({example: 'audio_url', description:"audio"})
    @Prop()
    audio_url: string;

    @Prop()
    color: number[];
}

export const SongSchema = SchemaFactory.createForClass(Song);