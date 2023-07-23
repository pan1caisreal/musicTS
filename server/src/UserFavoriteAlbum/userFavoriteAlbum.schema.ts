import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import {User} from "../User/user.schema";
import {Album} from "../Album/album.schema";

export type userFavoriteAlbumDocument = HydratedDocument<userFavoriteAlbum>;

@Schema()
export class userFavoriteAlbum {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user_id: User;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Album' })
    album_id: Album;
}

export const userFavoriteAlbumSchema = SchemaFactory.createForClass(userFavoriteAlbum);