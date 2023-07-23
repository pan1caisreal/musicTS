import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import {Album} from "../Album/album.schema";

export type SongDocument = HydratedDocument<Song>;

@Schema()
export class Song {
    @Prop()
    title: string;

    @Prop()
    artist: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Album'})
    album: Album;

    @Prop()
    listens_count: number;

    @Prop()
    cover_url: string;

    @Prop()
    audio_url: string;
}

export const SongSchema = SchemaFactory.createForClass(Song);