import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import {Playlist} from "../PlayList/playlist.schema";
import {Song} from "../Song/song.schema";
import {ApiProperty} from "@nestjs/swagger";

export type PlaylistSongDocument = HydratedDocument<PlaylistSong>;

@Schema()
export class PlaylistSong {
    @ApiProperty({example: '64c39d587a43f3ad459059c8', description: 'playlist ObjectId'})
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' })
    playlist_id: Playlist;

    @ApiProperty({example: '64c24b991681803c7265206d', description: 'song ObjectId'})
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Song' })
    song_id: Song;
}

export const PlaylistSongSchema = SchemaFactory.createForClass(PlaylistSong);