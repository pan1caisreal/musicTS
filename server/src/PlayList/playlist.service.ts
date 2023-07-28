import {Injectable} from "@nestjs/common";
import {PlaylistDto} from "./dto/playlist.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Playlist, PlaylistDocument} from "./playlist.schema";
import {Model, ObjectId} from "mongoose";


@Injectable()

export class PlaylistService{
    constructor(@InjectModel(Playlist.name) private playlistModel: Model<PlaylistDocument>) {}

    async create(dto: PlaylistDto) : Promise<Playlist> {
        const playlist = await this.playlistModel.create(dto)
        return playlist
    }

    async getAllUserPlaylist(id: ObjectId) : Promise<Playlist[]> {
        const playlists = await this.playlistModel.find({user: id})
        return playlists
    }

    async deletePlayList(id: ObjectId) : Promise<Playlist>{
        const playlist = await this.playlistModel.findByIdAndDelete(id)
        return playlist
    }
}