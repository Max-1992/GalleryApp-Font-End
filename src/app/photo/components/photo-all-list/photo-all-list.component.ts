import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// SERVICES
import { PhotoService } from '../../../core/services/photo.service';

// MODELS
import { Photo } from '../../../models/photo.interface';

// VARIABLES DE ENTORNO
import { environment } from '../../../../environments/environment';




@Component({
  selector: 'app-photo-all-list',
  templateUrl: './photo-all-list.component.html',
  styleUrls: ['./photo-all-list.component.css']
})
export class PhotoAllListComponent implements OnInit {

  photos: Photo[];
  url = environment.HOST;

  constructor( private photoServices: PhotoService,
               private router: Router
              ) { }

  ngOnInit() {
    this.allPhoto();
  }

  allPhoto() {
    this.photoServices.all()
                      .subscribe( ( allphoto: Photo[] ) => this.photos = allphoto, err => console.log(err) );
  }

  selectedPhoto( id: string ) {
     this.router.navigateByUrl(`/photos/preview/${id}`);
  }

}
