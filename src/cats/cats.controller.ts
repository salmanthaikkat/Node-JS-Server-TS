import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { CatsService } from './cats.service';

interface CatDto {
  id: number,
  name: string
}

@Controller('cats')
export class CatsController {

  constructor(private catsService: CatsService){}

  @Get()
  getAll() {
    return this.catsService.getCats();
  }

  @Post()
  addCat(@Body() cat:CatDto) {
    console.log(cat);
    return this.catsService.createCat(cat);
  }

  @Put()
  editCat(@Body() cat:CatDto) {
    return this.catsService.updateCat(cat);
  }

  @Delete()
  deleteCat(@Body() cat:CatDto) {
    return this.catsService.deleteCat(cat.id);
  }

}
