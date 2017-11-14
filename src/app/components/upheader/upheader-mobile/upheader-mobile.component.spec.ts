import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpheaderMobileComponent } from './upheader-mobile.component';

describe('UpheaderMobileComponent', () => {
  let component: UpheaderMobileComponent;
  let fixture: ComponentFixture<UpheaderMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpheaderMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpheaderMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
