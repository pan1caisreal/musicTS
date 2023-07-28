import {Injectable} from "@nestjs/common";
import {playlistSongDto} from "./dto/playlistSong.dto";
import {InjectModel} from "@nestjs/mongoose";
import {PlaylistSong, PlaylistSongDocument} from "./playlistSong.schema";
import {Model, ObjectId} from "mongoose";
import {Song, SongDocument} from "../Song/song.schema";


@Injectable()

export class PlaylistSongService{

    constructor(@InjectModel(PlaylistSong.name) private playlistSongModel: Model<PlaylistSongDocument>,
                @InjectModel(Song.name) private songModel: Model<SongDocument>) {}

    async create(dto: playlistSongDto) : Promise<PlaylistSong> {
        const playlistSong = await this.playlistSongModel.create(dto)
        return playlistSong
    }

    async getAllPlaylistSong(id: ObjectId) : Promise<Song[]> {
        const playlistSongs = await this.playlistSongModel.find({playlist_id: id}).populate('song_id').exec()
        const songs = playlistSongs.map((playlistSongs) => playlistSongs.song_id)
        return songs
    }

    async delete(id: ObjectId) {
        const playlistSong = await this.playlistSongModel.findByIdAndDelete(id)
        return playlistSong
    }
}