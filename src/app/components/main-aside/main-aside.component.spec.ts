import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainASideComponent } from './main-aside.component';

describe('MainASideComponent', () => {
  let component: MainASideComponent;
  let fixture: ComponentFixture<MainASideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainASideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainASideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
