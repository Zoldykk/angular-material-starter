import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseMainComponent } from './showcase-main.component';

describe('ShowcaseMainComponent', () => {
  let component: ShowcaseMainComponent;
  let fixture: ComponentFixture<ShowcaseMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcaseMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcaseMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
