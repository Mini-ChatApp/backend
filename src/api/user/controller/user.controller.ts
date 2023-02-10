import {Body, Controller, Post, UseInterceptors} from '@nestjs/common';
import {UserService} from "../service/user.service";
import {UserCommonDto} from "../dto/user.common.dto";
import {GlobalResponseInterceptor} from "../../../common/interceptors/global.response.interceptor";
import {ApiCreatedResponse, ApiOperation, ApiTags} from "@nestjs/swagger";

@Controller('/vi/user')
@UseInterceptors(GlobalResponseInterceptor)
@ApiTags('유저 API')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}

    @Post('/signup')
    @ApiOperation({ summary: 'User API', description: '유저를 생성 한다.' })
    @ApiCreatedResponse({ description: '유저를 생성한다.', type: UserCommonDto })
    signUp(@Body() req: UserCommonDto) {
        return true;
    }


}
