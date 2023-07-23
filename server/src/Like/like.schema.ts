import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {User} from "../User/user.schema";
import {Song} from "../Song/song.schema";
import {Album} from "../Album/album.schema";
import mongoose from "mongoose";
export type LikeDocument = HydratedDocument<Like>;

@Schema()
export class Like {
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Song'})
    song: Song;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Album'})
    album: Album
}

export const LikeSchema = SchemaFactory.createForClass(Like);