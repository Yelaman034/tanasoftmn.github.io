import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSixComponent } from './news-six.component';

describe('NewsSixComponent', () => {
  let component: NewsSixComponent;
  let fixture: ComponentFixture<NewsSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
