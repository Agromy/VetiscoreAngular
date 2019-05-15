import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetCreateComponent } from './vet-create.component';

describe('VetCreateComponent', () => {
  let component: VetCreateComponent;
  let fixture: ComponentFixture<VetCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
