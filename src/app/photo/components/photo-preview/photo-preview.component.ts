import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// SERVICES
import { PhotoService } from '../../../core/services/photo.service';

// MODELS
import { Photo } from 'src/app/models/photo.interface';

// VARIABLES GLOBALES
import { environment } from '../../../../environments/environment';



@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {

  id: string;
  photo: Photo;
  url: string = environment.HOST;

  constructor( private activateRouter: ActivatedRoute,
               private router: Router,
               private photoServices: PhotoService ) { }

  ngOnInit() {
    this.activateRouter.params.subscribe( params => {
      this.id = params[`id`];
      this.getPhoto();
    });
  }

  getPhoto() {
    this.photoServices.get(this.id)
                      .subscribe( ( photo: Photo ) => this.photo = photo, err => console.log(err)  );
  }

  updatePhoto( title: string , description: string ): boolean {
      this.photoServices.update(this.id, title, description)
                        .subscribe( ( photo: Photo ) =>  this.router.navigateByUrl('/photos'), err => console.log(err) );
      return false;
  }

  deletePhoto() {
    this.photoServices.delete(this.id)
                      .subscribe( ( photo: Photo ) => this.router.navigateByUrl('/photos'), err => console.log(err) );
  }

}
