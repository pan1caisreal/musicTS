import {Controller, Get} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {SpotifyService} from "./spotify.service";

@ApiTags('spotify')
@Controller('spotify')

export class SpotifyController{
    constructor(private spotifyService: SpotifyService) {}

    @Get('topTracks')
    getTopTracks(){
        return this.spotifyService.getTopTracks()
    }
}