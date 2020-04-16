import { Controller, Get, Param, Put, Body, Post, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {

  constructor(private userService: UsersService){}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param() params) {
    return this.userService.getUser(params.id);
  }

  @Post()
  addUser(@Body() user: User) {
    return this.userService.updateUser(user);
  }

  @Put()
  updateUser(@Body() user: User) {
    return this.userService.updateUser(user);
  }

  @Delete()
  deleteUser(@Body() user: User) {
    return this.userService.deleteUser(user);
  }

}
