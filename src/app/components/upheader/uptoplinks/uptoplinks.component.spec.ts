import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UptoplinksComponent } from './uptoplinks.component';

describe('UptoplinksComponent', () => {
  let component: UptoplinksComponent;
  let fixture: ComponentFixture<UptoplinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UptoplinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UptoplinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
