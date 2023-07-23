import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import {Song} from "../Song/song.schema";
import {User} from "../User/user.schema";

export type userFavoriteSongDocument = HydratedDocument<userFavoriteSong>;

@Schema()
export class userFavoriteSong {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user_id: User;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Song' })
    song_id: Song;
}

export const userFavoriteSongSchema = SchemaFactory.createForClass(userFavoriteSong);