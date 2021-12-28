import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],
})
export class ProductComponent implements OnInit {
  constructor(public titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Бүтээгдэхүүн');
  }
}
