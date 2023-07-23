import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SongDocument = HydratedDocument<Song>;

@Schema()
export class Song {
    @Prop()
    title: string;

    @Prop()
    artist: string;

    @Prop()
    album_id: number;

    @Prop()
    listens_count: number;

    @Prop()
    cover_url: number;

    @Prop()
    audio_url: string;
}

export const SongSchema = SchemaFactory.createForClass(Song);