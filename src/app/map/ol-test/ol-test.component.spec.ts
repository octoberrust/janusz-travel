import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlTestComponent } from './ol-test.component';

describe('OlTestComponent', () => {
  let component: OlTestComponent;
  let fixture: ComponentFixture<OlTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
