import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcheckoutformComponent } from './upcheckoutform.component';

describe('UpcheckoutformComponent', () => {
  let component: UpcheckoutformComponent;
  let fixture: ComponentFixture<UpcheckoutformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcheckoutformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcheckoutformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
