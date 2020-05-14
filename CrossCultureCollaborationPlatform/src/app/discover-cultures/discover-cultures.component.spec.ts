import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverCulturesComponent } from './discover-cultures.component';

describe('DiscoverCulturesComponent', () => {
  let component: DiscoverCulturesComponent;
  let fixture: ComponentFixture<DiscoverCulturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverCulturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverCulturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
