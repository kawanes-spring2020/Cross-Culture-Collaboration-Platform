import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouvenirjumbotronComponent } from './souvenirjumbotron.component';

describe('SouvenirjumbotronComponent', () => {
  let component: SouvenirjumbotronComponent;
  let fixture: ComponentFixture<SouvenirjumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouvenirjumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouvenirjumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
