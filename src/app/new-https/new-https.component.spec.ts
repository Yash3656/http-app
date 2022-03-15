import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHttpsComponent } from './new-https.component';

describe('NewHttpsComponent', () => {
  let component: NewHttpsComponent;
  let fixture: ComponentFixture<NewHttpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHttpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHttpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
