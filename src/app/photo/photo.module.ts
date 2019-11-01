import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { PhotoAllListComponent } from './components/photo-all-list/photo-all-list.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';


@NgModule({
  declarations: [PhotoFormComponent, PhotoAllListComponent, PhotoPreviewComponent],
  imports: [
    CommonModule,
    PhotoRoutingModule
  ]
})
export class PhotoModule { }
