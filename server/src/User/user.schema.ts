import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {HydratedDocument, ObjectId} from 'mongoose';
import {ApiProperty} from "@nestjs/swagger";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @ApiProperty({example: "Tril", description: "username"})
    @Prop()
    username: string;

    @ApiProperty({example: "user@mail.ru", description: "user email"})
    @Prop()
    email: string;

    @ApiProperty({example: "123456", description: "user password"})
    @Prop()
    password: string;

    @ApiProperty({example: "default date", description: "register_date"})
    @Prop({default: Date.now })
    registration_date: Date;

    id: ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);