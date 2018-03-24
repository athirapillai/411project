import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunsetsComponent } from './sunsets.component';

describe('SunsetsComponent', () => {
  let component: SunsetsComponent;
  let fixture: ComponentFixture<SunsetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunsetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunsetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
