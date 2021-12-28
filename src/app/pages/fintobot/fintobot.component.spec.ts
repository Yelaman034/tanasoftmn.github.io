import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FintobotComponent } from './fintobot.component';

describe('FintobotComponent', () => {
  let component: FintobotComponent;
  let fixture: ComponentFixture<FintobotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FintobotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FintobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
