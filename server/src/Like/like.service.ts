import {Injectable, NotFoundException} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Like, LikeDocument} from "./like.schema";
import {Model, ObjectId} from "mongoose";
import {LikeDto} from "./dto/Like.dto";
import {Song, SongDocument} from "../Song/song.schema";
import {Album, AlbumDocument} from "../Album/album.schema";


@Injectable()

export class LikeService{
    constructor(@InjectModel(Like.name) private likeModel: Model<LikeDocument>,
                @InjectModel(Song.name) private songModel: Model<SongDocument>,
                @InjectModel(Album.name) private albumModel: Model<AlbumDocument>) {}


    async addLike(dto: LikeDto, id: ObjectId) : Promise<Like> {
        const like = new this.likeModel({
            user: id,
            song: dto.song,
            album: dto.album
        })
        return like.save()
    }

    async getLikedSongs(id: ObjectId) : Promise<Song[]> {
        const likedSongs = await this.likeModel
            .find({user: id,song:{$ne:null}})
            .populate("song")
            .exec()
        const songs = likedSongs.filter((like) => like.song !== null).map((like) => like.song)
        return songs
    }

    async getLikedAlbums(id: ObjectId) : Promise<Album[]> {
        const likedAlbums = await this.likeModel
            .find({user: id, album:{$ne:null}})
            .populate("album")
            .exec()
        const albums = likedAlbums.filter((like) => like.album !== null).map((like) => like.album)
        return albums
    }

    async removeLike(userId: ObjectId, songOrAlbumId: ObjectId) : Promise<Like> {
        const like = await this.likeModel.findOneAndDelete({
            user: userId,
            $or: [{song: songOrAlbumId}, {album: songOrAlbumId}]
        })
        if (!like){
            throw new NotFoundException('Like not found')
        }
        return like
    }
}