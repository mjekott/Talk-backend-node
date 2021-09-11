import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/@:username')
  getUserByUsername(@Param() param): string {
    return `detail of username = ${param.username}`;
  }

  @Get('/:userid')
  getUserByUserid(@Param() param): string {
    return `details of user id = ${param.userid}`;
  }

  @Post('/')
  createNewUser(): string {
    return `created a user`;
  }

  @Patch('/:userid')
  updateUserDetails() {
    return `created a user`;
  }

  @Put('/:userid/follow')
  followUser() {
    return `created a user`;
  }

  @Delete('/:userid/follow')
  unfollowUser() {
    return `created a user`;
  }

  @Get('/:userid/followers')
  getFollowersOfUser() {
    return `created a user`;
  }

  @Put('/:userid/followees')
  getFolloweesOfuser(): string {
    return `created a user`;
  }
}
