import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterHomecComponent } from './footer-homec.component';

describe('FooterHomecComponent', () => {
  let component: FooterHomecComponent;
  let fixture: ComponentFixture<FooterHomecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterHomecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterHomecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
