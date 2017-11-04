import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpDashboardComponent } from './up-dashboard.component';

describe('UpDashboardComponent', () => {
  let component: UpDashboardComponent;
  let fixture: ComponentFixture<UpDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
