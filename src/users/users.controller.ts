import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  @Get('/@:username')
  getUserByUsername(@Param('username') username: string): string {
    return `detail of username = ${username}`;
  }

  @Get('/:userid')
  getUserByUserid(@Param('userid') userid: string): string {
    return `details of user id = ${userid}`;
  }

  @Post('/')
  createNewUser(): string {
    return `created a user`;
  }

  @Patch('/:userid')
  updateUserDetails(@Param('userid') userid: string) {
    return `created a user`;
  }

  @Put('/:userid/follow')
  followUser(@Param('userid') userid: string) {
    return `created a user`;
  }

  @Delete('/:userid/follow')
  unfollowUser(@Param('userid') userid: string) {
    return `created a user`;
  }

  @Get('/:userid/followers')
  getFollowersOfUser(@Param('userid') userid: string) {
    return `created a user`;
  }

  @Put('/:userid/followees')
  getFolloweesOfuser(@Param('userid') userid: string): string {
    return `created a user`;
  }
}
