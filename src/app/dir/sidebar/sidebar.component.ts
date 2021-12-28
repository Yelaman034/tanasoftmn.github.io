import { Component, OnInit } from '@angular/core';
declare function header_side_hide(): any;
declare function header_side_init(): any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
})
export class SidebarComponent implements OnInit {
  title: string = '';
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      header_side_init();
    }, 500);
  }

  toggleSidebar() {
    header_side_hide();
  }
  changeTittle(title: string) {
    localStorage.setItem('header_title', title);
  }
}
