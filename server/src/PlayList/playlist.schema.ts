import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import {User} from "../User/user.schema";
import {ApiProperty} from "@nestjs/swagger";

export type PlaylistDocument = HydratedDocument<Playlist>;

@Schema()
export class Playlist {
    @ApiProperty({example: '64bfbc6fcb58f083a3c106e9', description: 'user ObjectId'})
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;

    @ApiProperty({example: 'New PlayList', description: 'title of playlist'})
    @Prop()
    title: string;
}

export const PlaylistSchema = SchemaFactory.createForClass(Playlist);