import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Song, SongDocument} from "./song.schema";
import {Model, ObjectId} from "mongoose";
import {SongDto} from "./dto/song.dto";
import {FileService, FileType} from "../files/file.service";
import {Sign} from "crypto";


@Injectable()

export class SongService{

    constructor(@InjectModel(Song.name) private songModel: Model<SongDocument>,
                private fileService: FileService) {}

    async create(dto: SongDto, cover_url, audio_url) : Promise<Song>{
        const coverPath = this.fileService.createFile(FileType.IMAGE, cover_url)
        const audioPath = this.fileService.createFile(FileType.AUDIO, audio_url)
        const track = await this.songModel.create({...dto, listens_count: 0, cover_url: coverPath, audio_url: audioPath})
        return track
    }

    async getAll(count = 10, offset = 0):Promise<Song[]>{
        const tracks = await this.songModel.find().skip(offset).limit(count )
        return tracks
    }

    async getOne(id:ObjectId):Promise<Song>{
        const track = await this.songModel.findById(id)
        return track
    }

    async delete(id: ObjectId):Promise<Song>{
        const track = await this.songModel.findByIdAndDelete(id)
        this.fileService.removeFile(track.cover_url)
        this.fileService.removeFile(track.audio_url)
        return track
    }


    async listen(id: ObjectId) {
        const track = await this.songModel.findById(id)
        track.listens_count += 1
        track.save()
    }

    async search(query: string):Promise<Song[]> {
        const tracks = await this.songModel.find({
            title:{$regex: new RegExp(query,'i')}
        })
        return tracks
    }
}