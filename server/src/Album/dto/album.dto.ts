import {ApiProperty} from "@nestjs/swagger";

export class AlbumDto{
    @ApiProperty({example: 'Donda', description:"album title"})
    readonly title: string
    @ApiProperty({example: 'Kanye West', description:"artist"})
    readonly artist: string
    @ApiProperty({example: 'Rap', description: "genre"})
    readonly genre: string
    @ApiProperty({example: '2023-07-26', description:"release_date", format: 'date'})
    readonly release_date: Date
}