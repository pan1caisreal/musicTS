import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {PlaylistService} from "./playlist.service";
import {ApiOperation, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Playlist} from "./playlist.schema";
import {PlaylistDto} from "./dto/playlist.dto";
import {ObjectId} from "mongoose";

@ApiTags('Playlist')
@Controller('/playlist')

export class PlaylistController{
    constructor(private playlistService: PlaylistService) {}

    @Post()
    @ApiOperation({summary: 'Create playList'})
    @ApiResponse({status: 200, type: Playlist})
    create(@Body() dto: PlaylistDto){
        return this.playlistService.create(dto)
    }

    @Get(':id')
    @ApiOperation({summary: 'Get All playlists by user Id'})
    @ApiResponse({status: 200, type: [Playlist]})
    @ApiParam({name: 'id',description: 'user id', type: String})
    getAllUserPlaylist(@Param('id') id: ObjectId){
        return this.playlistService.getAllUserPlaylist(id)
    }

    @Delete(':id')
    @ApiOperation({summary: 'Delete playlist by Id'})
    @ApiResponse({status: 200, type: Playlist})
    @ApiParam({name: 'id', description: 'playlist id', type: String})
    deletePlaylist(@Param('id') id: ObjectId){
        return this.playlistService.deletePlayList(id)
}

}