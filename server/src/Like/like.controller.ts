import {Body, Controller, Delete, Get, Param, Post, UseGuards} from "@nestjs/common";
import {LikeService} from "./like.service";
import {ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {Like} from "./like.schema";
import {LikeDto} from "./dto/Like.dto";
import {ObjectId} from "mongoose";
import {Song} from "../Song/song.schema";
import {Album} from "../Album/album.schema";
import {User} from "../User/user.schema";

@ApiTags('Like')
@Controller('/like')

export class LikeController{
    constructor(private likeService: LikeService) {}


    @ApiOperation({summary: 'Add like'})
    @ApiParam({name: 'id', description: 'user ObjectId', type: String})
    @ApiBearerAuth()
    @ApiResponse({status: 200, type: Like})
    @Post(':id')
    @UseGuards(JwtAuthGuard)
    async AddLike(@Param('id') id: ObjectId, @Body() dto: LikeDto){
        return this.likeService.addLike(dto, id)
    }

    @ApiOperation({summary: 'get liked songs'})
    @ApiParam({name: 'id', description: 'user ObjectId', type: String})
    @ApiBearerAuth()
    @ApiResponse({status: 200, type: [Song]})
    @Get('/songs/:id')
    @UseGuards(JwtAuthGuard)
    getLikedSongs(@Param('id') id:ObjectId){
        return this.likeService.getLikedSongs(id)
    }

    @ApiOperation({summary: 'get liked albums'})
    @ApiParam({name: 'id', description: 'user ObjectId', type: String})
    @ApiBearerAuth()
    @ApiResponse({status: 200, type: [Album]})
    @Get('/albums/:id')
    @UseGuards(JwtAuthGuard)
    getLikedAlbums(@Param('id') id:ObjectId){
        return this.likeService.getLikedAlbums(id)
    }

    @ApiOperation({summary: 'remove like'})
    @ApiParam({name: 'userId', description: 'user ObjectId', type: String})
    @ApiParam({name: 'songOrAlbumId', description: 'song or album ObjectId', type: String})
    @ApiBearerAuth()
    @ApiResponse({status: 200, type: Like})
    @Delete('/:userId/:songOrAlbumId')
    @UseGuards(JwtAuthGuard)
    removeLike(
        @Param('userId') userId:ObjectId,
        @Param('songOrAlbumId') songOrAlbumId: ObjectId
    ){
        return this.likeService.removeLike(userId, songOrAlbumId)
    }
}