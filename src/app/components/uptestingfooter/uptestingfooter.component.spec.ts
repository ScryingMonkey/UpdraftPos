import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UptestingfooterComponent } from './uptestingfooter.component';

describe('UptestingfooterComponent', () => {
  let component: UptestingfooterComponent;
  let fixture: ComponentFixture<UptestingfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UptestingfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UptestingfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
