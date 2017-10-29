import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpaccountComponent } from './upaccount.component';

describe('UpaccountComponent', () => {
  let component: UpaccountComponent;
  let fixture: ComponentFixture<UpaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
