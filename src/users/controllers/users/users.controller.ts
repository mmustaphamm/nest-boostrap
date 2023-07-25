import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UserDto } from 'src/users/dtos/createuser.dtos';

@Controller('users')
export class UsersController {
  @Get()
  getallUsers() {
    return { username: 'mustapha', email: 'mustapha@gmail.com' };
  }

  @Get()
  getallUsersbyQuerry(@Query('sortBy') sortBy: string) {
    console.log(sortBy);
    return { username: 'mustapha', email: 'mustapha@gmail.com' };
  }

  @Get(':id/:postId')
  getallUsersbyId(
    @Param('id', ParseIntPipe) id: number,
    @Param('postId') postId: string,
  ) {
    return { id, postId };
  }

  @Post('/express')
  createUserss(@Req() request: Request, @Res() response: Response) {
    console.log(request.body);
    response.send('çreated');
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUsers(@Body() userData: UserDto) {
    console.log(userData);
    return {};
  }
}
