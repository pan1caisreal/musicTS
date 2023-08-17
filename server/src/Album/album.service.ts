import {Injectable} from "@nestjs/common";
import {AlbumDto} from "./dto/album.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Album, AlbumDocument} from "./album.schema";
import {Model, ObjectId} from "mongoose";
import {FileService, FileType} from "../files/file.service";
import {getColorFromURL} from 'color-thief-node'
import * as path from 'path'

@Injectable()

export class AlbumService{

    constructor(@InjectModel(Album.name) private albumModel: Model<AlbumDocument>,
                private fileService: FileService) {}

    async create(dto: AlbumDto, coverUrlElement: any) : Promise<Album> {
        const coverPath = this.fileService.createFileAlbum(FileType.IMAGE, coverUrlElement)
        const album = await this.albumModel.create({...dto, cover_url: coverPath})
        return album
    }

    async getAll(count = 10, offset = 0):Promise<Album[]>{
        const album = await this.albumModel.find().skip(offset).limit(count)
        return album
    }

    async getOne(id: ObjectId) : Promise<Album> {
        const album = await this.albumModel.findById(id)
        const filepath = path.resolve(__dirname, '..', '..', 'static', 'album', album.cover_url)
        getColorFromURL(filepath)
            .then(color => album.color = color)
            .catch(err => console.log(err))
        return album
    }

    async delete(id: ObjectId) : Promise<Album> {
        const album = await this.albumModel.findByIdAndDelete(id)
        this.fileService.deleteFileAlbum(album.cover_url)
        return album
    }

    async getAlbumByGenre(genre: string) : Promise<Album[]> {
        const albums = await this.albumModel.find({genre: genre})
        return albums
    }
}