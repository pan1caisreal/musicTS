import {Body, Controller, Delete, Get, Param, Post, Query, UploadedFiles, UseInterceptors} from "@nestjs/common";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {AlbumDto} from "./dto/album.dto";
import {AlbumService} from "./album.service";
import {ApiOperation, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Album} from "./album.schema";
import {ObjectId} from "mongoose";

@ApiTags('Album')
@Controller('/album')

export class AlbumController{
    constructor(private albumService: AlbumService) {}

    @Post()
    @ApiOperation({summary:'Create album'})
    @ApiResponse({status: 200, type: Album})
    @UseInterceptors(FileFieldsInterceptor([
        {name: 'cover_url',maxCount: 1},
    ]))
    create(@UploadedFiles() files, @Body() dto: AlbumDto){
        const {cover_url} = files
        return this.albumService.create(dto, cover_url[0])
    }

    @Get()
    @ApiOperation({summary: 'Get ALL albums'})
    @ApiResponse({status: 200, type: [Album]})
    getAll(@Query('count') count: number,
           @Query('offset') offset: number){
        return this.albumService.getAll(count, offset)
    }

    @Get(':id')
    @ApiOperation({summary: 'Get album by id'})
    @ApiParam({name: 'id', description: 'id of the album', type: String})
    getOne(@Param('id') id:ObjectId){
        return this.albumService.getOne(id)
    }

    @Delete(':id')
    @ApiOperation({summary: 'Delete album by id'})
    @ApiParam({name: 'id', description: 'id of the album', type: String})
    deleteAlbum(@Param('id') id:ObjectId){
        return this.albumService.delete(id)
    }
}