import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// COMPONENTS
import { LayoutComponent } from './components/layout/layout.component';



const routes: Routes = [
  { path: '',
    component: LayoutComponent,
    children: [
      { path: '',
        loadChildren: () => import('./photo/photo.module').then( m => m.PhotoModule )
      }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
