import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'showcase',
        loadChildren: () =>
            import('./modules/showcase/showcase.module').then(
                (a) => a.ShowcaseModule
            ),
    },
    {
        path: '**',
        redirectTo: '/oops/not-found',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
