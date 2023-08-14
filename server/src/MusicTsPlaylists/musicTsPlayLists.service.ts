import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {musicTsPlaylist, musicTsPlaylistDocument} from "./musicTsPlayLists.schema";
import {Model} from "mongoose";
import {MusicTsPlaylistDto} from "./dto/MusicTsPlaylist.dto";
import {FileService, FileType} from "../files/file.service";

@Injectable()

export class MusicTsPlayListsService{
    constructor(@InjectModel(musicTsPlaylist.name) private MusicTsPlaylist: Model<musicTsPlaylistDocument>,
                private fileService: FileService) {}

    async create(dto: MusicTsPlaylistDto, coverUrlElement: any) : Promise<musicTsPlaylist> {
        const coverPath = this.fileService.createPlaylistFile(FileType.IMAGE, coverUrlElement)
        const playlist = await this.MusicTsPlaylist.create({...dto, cover_url: coverPath})
        return playlist
    }

    findOneById(id: string) {
        return this.MusicTsPlaylist
            .findById(id)
            .populate({
                path: 'songs',
                model: 'Song',
            })
            .exec();
    }

    getAll() {
        return this.MusicTsPlaylist
            .find()
            .populate({
                path: 'songs',
                model: 'Song',
            })
            .exec();
    }
}