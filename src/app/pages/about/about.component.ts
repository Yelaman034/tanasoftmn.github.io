import { Component, OnInit, Sanitizer } from '@angular/core';
import { TitleService } from '../../service/title.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less'],
})
export class AboutComponent implements OnInit {
  constructor(public titleService: TitleService) {}

  ngOnInit(): void {
    console.log('render about');
    this.titleService.setTitle('Бидний тухай');
  }
}
