import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less'],
})
export class ContactComponent implements OnInit {
  constructor(public titleService: TitleService) {}

  ngOnInit(): void {
    console.log('render contact');
    this.titleService.setTitle('Холбоо барих');
  }
}
