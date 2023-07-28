import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {PlaylistSongService} from "./playlistSong.service";
import {ApiOperation, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {PlaylistSong} from "./playlistSong.schema";
import {playlistSongDto} from "./dto/playlistSong.dto";
import {ObjectId} from "mongoose";
import {Song} from "../Song/song.schema";

@ApiTags('Playlist')
@Controller('/playlistSong')

export class PlaylistSongController{
    constructor(private playlistSongService: PlaylistSongService) {}

    @Post()
    @ApiOperation({summary: 'add song in playList'})
    @ApiResponse({status: 200, type: PlaylistSong})
    addSong(@Body() dto: playlistSongDto){
        return this.playlistSongService.create(dto)
    }

    @Get(':id')
    @ApiResponse({status: 200, type: [Song]})
    @ApiOperation({summary: 'get song by playlist_id'})
    @ApiParam({name: 'id', description: 'playlist ObjectId', type: String})
    getAllPlaylistSong(@Param('id') id: ObjectId){
        return this.playlistSongService.getAllPlaylistSong(id)
    }

    @Delete(':id')
    @ApiResponse({status: 200, type: PlaylistSong})
    @ApiOperation({summary: 'delete song by element id'})
    @ApiParam({name: 'id', description: 'element ObjectId'})
    deleteSong(@Param('id') id: ObjectId){
        return this.playlistSongService.delete(id)
    }

}