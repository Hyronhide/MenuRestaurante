import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeekService {

  constructor() { }

  loadWeek(): Observable<Day[]> {
    return timer(500)
      .pipe(
        map(() => [
          { chef: 'Dario Ch', menu: ['Cordon Blue', 'Steak pimineta', 'Chicharron']},
          { chef: 'Pepito', menu: ['Menu 1', 'Menu 2', 'vMenu 3']},
          { chef: 'Juanita', menu: ['Menu 4 ', 'Menu 5']},
          { chef: 'Lupita', menu: ['Menu 6', 'Menu 7', 'Menu 8']},
          { chef: 'Fulanito', menu: ['Menu 9', 'Menu 10', 'Menu 11']},
        ])
      );
  }
}

export class Day {
  constructor(public chef: string, public menu: string[]) { }
}
