import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import {Playlist} from "../PlayList/playlist.schema";
import {Song} from "../Song/song.schema";

export type PlaylistSongDocument = HydratedDocument<PlaylistSong>;

@Schema()
export class PlaylistSong {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' })
    playlist_id: Playlist;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Song' })
    song_id: Song;
}

export const PlaylistSongSchema = SchemaFactory.createForClass(PlaylistSong);