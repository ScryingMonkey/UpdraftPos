import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpeditorderComponent } from './upeditorder.component';

describe('UpeditorderComponent', () => {
  let component: UpeditorderComponent;
  let fixture: ComponentFixture<UpeditorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpeditorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpeditorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
