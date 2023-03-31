import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteEnums } from './core/enums/route.enum';

const routes: Routes = [
  {
    path: RouteEnums.PERSONAL,
    loadChildren: () => import('./features/pages/forms/forms.module').then((m) => m.FormsModule)
  },
  {
    path: RouteEnums.ACCOUNT,
    loadChildren: () => import('./features/pages/forms/forms.module').then((m) => m.FormsModule)
  },
  {
    path: RouteEnums.ADDRESS,
    loadChildren: () => import('./features/pages/forms/forms.module').then((m) => m.FormsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
