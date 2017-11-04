import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpInventoryComponent } from './up-inventory.component';

describe('UpInventoryComponent', () => {
  let component: UpInventoryComponent;
  let fixture: ComponentFixture<UpInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
