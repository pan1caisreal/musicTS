import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AlbumDocument = HydratedDocument<Album>;

@Schema()
export class Album {
    @Prop()
    title: string;

    @Prop()
    artist: string;

    @Prop()
    genre: string;

    @Prop()
    release_date: Date;

    @Prop()
    cover_url: string;

    @Prop()
    color?: number[][]
}

export const AlbumSchema = SchemaFactory.createForClass(Album);