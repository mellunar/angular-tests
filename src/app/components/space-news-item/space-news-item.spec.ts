import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceNewsItem } from './space-news-item';

describe('SpaceNewsItem', () => {
  let component: SpaceNewsItem;
  let fixture: ComponentFixture<SpaceNewsItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceNewsItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceNewsItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
