import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceNewsList } from './space-news-list';

describe('SpaceNewsList', () => {
  let component: SpaceNewsList;
  let fixture: ComponentFixture<SpaceNewsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceNewsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceNewsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
