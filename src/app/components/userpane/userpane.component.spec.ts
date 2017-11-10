import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPaneComponent } from './userpane.component';

describe('UserpaneComponent', () => {
  let component: UserPaneComponent;
  let fixture: ComponentFixture<UserPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
