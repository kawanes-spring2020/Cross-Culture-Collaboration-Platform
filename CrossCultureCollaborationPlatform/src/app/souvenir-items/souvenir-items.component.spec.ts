import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouvenirItemsComponent } from './souvenir-items.component';

describe('SouvenirItemsComponent', () => {
  let component: SouvenirItemsComponent;
  let fixture: ComponentFixture<SouvenirItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouvenirItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouvenirItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
