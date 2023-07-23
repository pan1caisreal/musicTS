import {Module} from "@nestjs/common";
import {LikeController} from "./like.controller";
import {LikeService} from "./like.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Like, LikeSchema} from "./like.schema";


@Module({
    imports: [MongooseModule.forFeature([{name: Like.name, schema: LikeSchema}])],
    controllers: [LikeController],
    providers: [LikeService]
})

export class LikeModule{}