import {MusicTsPlayListsService} from "./musicTsPlayLists.service";
import {Body, Controller, Get, Param, Post, UploadedFiles, UseInterceptors} from "@nestjs/common";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {musicTsPlaylist} from "./musicTsPlayLists.schema";
import {MusicTsPlaylistDto} from "./dto/MusicTsPlaylist.dto";
import {FileFieldsInterceptor} from "@nestjs/platform-express";

@ApiTags("MusicTsPlayLists")
@Controller('MusicTsPlayList')
export class MusicTsPlayListsController{
    constructor(private MusicTsPlayListService: MusicTsPlayListsService) {}

    @Post()
    @ApiOperation({summary: 'Create default playlist'})
    @ApiResponse({status:200, type: musicTsPlaylist})
    @UseInterceptors(FileFieldsInterceptor([
        {name: 'cover_url',maxCount: 1},
    ]))
    create(@UploadedFiles() files, @Body() dto:MusicTsPlaylistDto){
        const {cover_url} = files
        return this.MusicTsPlayListService.create(dto, cover_url[0])
    }

    @Get(':id')
    @ApiResponse({status: 200, type:musicTsPlaylist})
    @ApiOperation({summary: 'Get default playlist by id'})
    findOneById(@Param('id') id: string){
        return this.MusicTsPlayListService.findOneById(id)
    }

    @Get()
    @ApiResponse({status: 200, type:[musicTsPlaylist]})
    @ApiOperation({summary: 'Get all default playlists'})
    getAll(){
        return this.MusicTsPlayListService.getAll()
    }


}