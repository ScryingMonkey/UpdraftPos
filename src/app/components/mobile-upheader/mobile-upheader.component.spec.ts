import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileUpheaderComponent } from './mobile-upheader.component';

describe('MobileUpheaderComponent', () => {
  let component: MobileUpheaderComponent;
  let fixture: ComponentFixture<MobileUpheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileUpheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileUpheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
