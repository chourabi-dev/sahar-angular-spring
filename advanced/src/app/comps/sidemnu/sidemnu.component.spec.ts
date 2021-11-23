import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemnuComponent } from './sidemnu.component';

describe('SidemnuComponent', () => {
  let component: SidemnuComponent;
  let fixture: ComponentFixture<SidemnuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidemnuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidemnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
