import { Injectable, setTestabilityGetter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  title: string = '';

  setTitle(title: string) {
    this.title = title;
  }
}
