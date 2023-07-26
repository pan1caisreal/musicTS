import {Body, Controller, Delete, Get, Param, Post, UseInterceptors, UploadedFiles, Query} from "@nestjs/common";
import {SongService} from "./song.service";
import {SongDto} from "./dto/song.dto";
import {ApiParam, ApiTags} from "@nestjs/swagger";
import {ObjectId} from "mongoose";
import {FileFieldsInterceptor} from "@nestjs/platform-express";

@ApiTags('Song')
@Controller(`/songs`)

export class SongController{
    constructor(private songService: SongService) {}

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        {name: 'cover_url',maxCount: 1},
        {name: 'audio_url', maxCount: 1},
    ]))
    create(@UploadedFiles() files, @Body() dto: SongDto){
        const {cover_url, audio_url} = files
        return this.songService.create(dto,cover_url[0],audio_url[0])
    }

    @Get()
    getAll(@Query('count') count: number,
           @Query('offset') offset: number){
        return this.songService.getAll(count, offset)
    }

    @Get('/search')
    search(@Query('query') query: string){
        return this.songService.search(query)
    }

    @Get(':id')
    @ApiParam({name: 'id', description: 'id of the song', type: String})
    getOne(@Param('id') id: ObjectId){
        return this.songService.getOne(id)
    }

    @Delete(':id')
    @ApiParam({name: 'id', description: 'id of the song', type: String})
    delete(@Param('id') id:ObjectId){
        return this.songService.delete(id)
    }

    @Post('/listen/:id')
    listen(@Param('id') id:ObjectId){
        return this.songService.listen(id)
    }
}