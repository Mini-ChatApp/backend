import {
    IsString,
    IsNotEmpty,
    MinLength,
    MaxLength,
    Matches,
} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class UserCommonDto {

    @ApiProperty()
    user_id : string;

    @ApiProperty()
    password : string;

    @ApiProperty()
    nickname : string;
}