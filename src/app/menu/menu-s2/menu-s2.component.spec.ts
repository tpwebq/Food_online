import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuS2Component } from './menu-s2.component';

describe('MenuS2Component', () => {
  let component: MenuS2Component;
  let fixture: ComponentFixture<MenuS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuS2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
