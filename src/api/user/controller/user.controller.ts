import {Body, Controller, Post, UseInterceptors} from '@nestjs/common';
import {UserService} from "../service/user.service";
import {UserCommonDto} from "../dto/user.common.dto";
import {GlobalResponseInterceptor} from "../../../common/interceptors/global.response.interceptor";
import {ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags,getSchemaPath} from "@nestjs/swagger";
import {GlobalResponse} from "../../../common/interface/common/global.response";
import {ResponseDto} from "src/common/decorator/swagger/responseDto";

@Controller('/vi/user')
@UseInterceptors(GlobalResponseInterceptor)
@ApiTags('유저 API')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}

    @Post('/signup')
    @ApiOkResponse({
        description: 'The user records',
        isArray: false
    })
    @ApiOperation({ summary: 'User API', description: '유저를 생성 한다.' })
    @ResponseDto(UserCommonDto)
    signUp(@Body() req: UserCommonDto) {
        return true;
    }


}
