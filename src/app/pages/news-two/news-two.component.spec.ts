import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTwoComponent } from './news-two.component';

describe('NewsTwoComponent', () => {
  let component: NewsTwoComponent;
  let fixture: ComponentFixture<NewsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
