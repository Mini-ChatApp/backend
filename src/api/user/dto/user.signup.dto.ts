import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';
import { ApiBody, ApiProperty } from '@nestjs/swagger';

export class UserSignupDto {
  @ApiProperty({
    example: 'test1234',
    description: '유저 아이디',
    required: true,
    type: String,
  })
  user_id: string;

  @ApiProperty({
    example: 'qwer1234',
    description: '유저 비밀번호',
    required: true,
    type: String,
  })
  password: string;

  @ApiProperty({
    example: '안녕2023',
    description: '유저 닉네임',
    required: true,
    type: String,
  })
  @ApiProperty()
  nickname: string;
}
