import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEpisodesComponent } from './show-episodes.component';

describe('ShowEpisodesComponent', () => {
  let component: ShowEpisodesComponent;
  let fixture: ComponentFixture<ShowEpisodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEpisodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
