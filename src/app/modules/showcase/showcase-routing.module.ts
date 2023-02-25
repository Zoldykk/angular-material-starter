import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from 'src/app/layout/layout-routing.service';
import { ShowcaseMainComponent } from './components/showcase-main/showcase-main.component';

const routes: Routes = [
  Layout.childRoutes([
    {
      path: '',
      component: ShowcaseMainComponent,
      data: { title: 'Showcase' } // This is the page title showing in the tab (in browser)
    },
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowcaseRoutingModule { }
