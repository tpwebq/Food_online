import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuFiltersComponent } from './menu-filters/menu-filters.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuS1Component } from './menu-s1/menu-s1.component';
import { MenuS2Component } from './menu-s2/menu-s2.component';
import { MenuComponent } from './menu.component';


@NgModule({
  declarations: [
    MenuFiltersComponent,
    MenuListComponent,
    MenuS1Component,
    MenuS2Component,
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
