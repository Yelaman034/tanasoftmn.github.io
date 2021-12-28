import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title.service';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.less'],
})
export class ServiceComponent implements OnInit {
  constructor(public titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Үйлчилгээ');
  }
}
