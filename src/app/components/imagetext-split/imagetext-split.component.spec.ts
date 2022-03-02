import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagetextSplitComponent } from './imagetext-split.component';

describe('ImagetextSplitComponent', () => {
  let component: ImagetextSplitComponent;
  let fixture: ComponentFixture<ImagetextSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagetextSplitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagetextSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
