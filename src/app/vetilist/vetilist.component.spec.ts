import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetilistComponent } from './vetilist.component';

describe('VetilistComponent', () => {
  let component: VetilistComponent;
  let fixture: ComponentFixture<VetilistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetilistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetilistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
