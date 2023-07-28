import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {User} from "../User/user.schema";
import {Song} from "../Song/song.schema";
import {Album} from "../Album/album.schema";
import mongoose from "mongoose";
import {ApiProperty} from "@nestjs/swagger";
export type LikeDocument = HydratedDocument<Like>;

@Schema()
export class Like {
    @ApiProperty({example: '64bfbc6fcb58f083a3c106e9', description: 'user ObjectId'})
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;

    @ApiProperty({example: '64c24b991681803c7265206d', description: 'song ObjectId'})
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Song'})
    song: Song;

    @ApiProperty({example: '64c37da3bf3ea49373edf73a', description: 'album ObjectId'})
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Album'})
    album: Album
}

export const LikeSchema = SchemaFactory.createForClass(Like);