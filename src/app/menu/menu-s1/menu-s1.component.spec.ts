import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuS1Component } from './menu-s1.component';

describe('MenuS1Component', () => {
  let component: MenuS1Component;
  let fixture: ComponentFixture<MenuS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuS1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
