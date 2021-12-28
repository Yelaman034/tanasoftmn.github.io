import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsThreeComponent } from './news-three.component';

describe('NewsThreeComponent', () => {
  let component: NewsThreeComponent;
  let fixture: ComponentFixture<NewsThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
