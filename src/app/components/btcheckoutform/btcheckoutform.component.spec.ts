import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcheckoutformComponent } from './btcheckoutform.component';

describe('BtcheckoutformComponent', () => {
  let component: BtcheckoutformComponent;
  let fixture: ComponentFixture<BtcheckoutformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtcheckoutformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtcheckoutformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
