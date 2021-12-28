import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFourComponent } from './news-four.component';

describe('NewsFourComponent', () => {
  let component: NewsFourComponent;
  let fixture: ComponentFixture<NewsFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
