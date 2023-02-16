import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class UserResponse {
  @ApiProperty({
    example: '1',
  })
  userId: number;
}
