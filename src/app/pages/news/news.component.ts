import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
})
export class NewsComponent implements OnInit {
  constructor(public titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Мэдээ');
  }
}
