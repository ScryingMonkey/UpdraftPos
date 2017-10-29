import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UporderComponent } from './uporder.component';

describe('UporderComponent', () => {
  let component: UporderComponent;
  let fixture: ComponentFixture<UporderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UporderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UporderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
