import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeTypeComponent } from './size-type.component';

describe('SizeTypeComponent', () => {
  let component: SizeTypeComponent;
  let fixture: ComponentFixture<SizeTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
