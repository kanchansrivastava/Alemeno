import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFeedingComponent } from './main-feeding.component';

describe('MainFeedingComponent', () => {
  let component: MainFeedingComponent;
  let fixture: ComponentFixture<MainFeedingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFeedingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFeedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
