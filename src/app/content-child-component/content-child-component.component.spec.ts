import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildComponentComponent } from './content-child-component.component';

describe('ContentChildComponentComponent', () => {
  let component: ContentChildComponentComponent;
  let fixture: ComponentFixture<ContentChildComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentChildComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
