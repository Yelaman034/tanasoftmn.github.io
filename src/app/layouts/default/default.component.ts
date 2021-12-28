import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title.service';

declare function header2(): any;
declare function mobile(): any;

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less'],
})
export class DefaultComponent implements OnInit {
  currentTitle: string = '';
  constructor(private titleService: TitleService) {}
  // public localStorageItem(): string {
  //   return localStorage.getItem('header_title') || '';
  // }
  ngOnInit(): void {
    setTimeout(() => {
      header2();
      mobile();
    }, 500);
  }

  ngDoCheck() {
    setTimeout(() => {
      this.currentTitle = this.titleService.title;
    }, 100);
  }
}
