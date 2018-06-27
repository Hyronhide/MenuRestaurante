import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  loadMenu(): Observable<Menu[]> {
    return timer(500)
      .pipe(
        map(() => {
          return [
            {
              chef: 'Dario Ch', date: new Date(),
              img: 'https://www.viajejet.com/wp-content/viajes/el-consumo-de-comida-rapida-en-estados-unidos.jpg'
            },
            {
              chef: 'fernando', date: new Date(),
              img: 'https://www.viajejet.com/wp-content/viajes/la-Enchilada.jpg'
            },
            {
              chef: 'pepito', date: new Date(),
              img: 'https://www.viajejet.com/wp-content/viajes/preparar-la-Enchilada.jpg'
            },
            {
              chef: 'juan', date: new Date(),
              img: 'https://revistaialimentos.com/wp-content/uploads/2015/06/asparagus.jpg'
            },
            {
              chef: 'David', date: new Date(),
              img: 'https://revistaialimentos.com/wp-content/uploads/2015/06/pollo-saludable.jpg'
            },
            {
              chef: 'Sergio', date: new Date(),
              img: 'https://revistaialimentos.com/wp-content/uploads/2017/08/seguridad-en-alimentacion-1.jpg'
            }

          ];
        })
      );
  }
}

export class Menu {
  constructor(
    public img: string,
    public chef: string,
    public date: Date
  ) { }
}
