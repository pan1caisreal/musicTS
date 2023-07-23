import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import {User} from "../User/user.schema";

export type PlaylistDocument = HydratedDocument<Playlist>;

@Schema()
export class Playlist {
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;

    @Prop()
    title: string;
}

export const PlaylistSchema = SchemaFactory.createForClass(Playlist);