import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { PhotoAllListComponent } from './components/photo-all-list/photo-all-list.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'photos' },
  { path: 'photos', component: PhotoAllListComponent },
  { path: 'photos/add', component: PhotoFormComponent },
  { path: 'photos/preview/:id', component: PhotoPreviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoRoutingModule { }
