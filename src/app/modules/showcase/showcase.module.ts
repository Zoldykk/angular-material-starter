import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseRoutingModule } from './showcase-routing.module';
import { ShowcaseMainComponent } from './components/showcase-main/showcase-main.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ShowcaseMainComponent
  ],
  imports: [
    CommonModule,
    ShowcaseRoutingModule,
    SharedModule
  ]
})
export class ShowcaseModule { }
