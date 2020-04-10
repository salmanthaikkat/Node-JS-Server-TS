import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {

  cats = [
    {
      id: 1,
      name: "Billy"
    },
    {
      id: 2,
      name: "Kitty"
    }
  ];

  getCats() {
    return this.cats;
  }

  createCat(cat) {
    this.cats = [...this.cats, {...cat}];
  }

  updateCat(cat) {
    this.cats = this.cats.map(c => {
      if(c.id === cat.id) {
        return {...cat};
      }
      return c;
    })
  }

  deleteCat(id) {
    this.cats = this.cats.filter(cat => cat.id != id);
  }
}
