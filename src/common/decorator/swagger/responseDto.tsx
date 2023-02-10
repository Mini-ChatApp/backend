import {applyDecorators, Type} from "@nestjs/common";
import {ApiOkResponse, getSchemaPath} from "@nestjs/swagger";


export const ResponseDto = <T extends Type<any>>(data: T) => {
    return applyDecorators(
        ApiOkResponse({
            schema: {
                allOf: [
                    { $ref: getSchemaPath(ResponseDto)},
                    {
                        properties:{
                            success:{
                                type: 'boolean',
                            },
                            data: {
                                type: 'array',
                                items: {$ref: getSchemaPath(data)},
                            }
                        }
                    }
                ]
            }
        })
    )

}