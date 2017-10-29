import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpheaderComponent } from './upheader.component';

describe('UpheaderComponent', () => {
  let component: UpheaderComponent;
  let fixture: ComponentFixture<UpheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
