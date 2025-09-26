import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinecoComponent } from './cineco.component';

describe('CinecoComponent', () => {
  let component: CinecoComponent;
  let fixture: ComponentFixture<CinecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CinecoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
