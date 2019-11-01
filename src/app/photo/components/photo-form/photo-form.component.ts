import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


// SERVIDES
import { PhotoService } from '../../../core/services/photo.service';

// MODELS
import { Photo } from '../../../models/photo.interface';




// INTERFACE
interface HtmlInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  file: File;
  photoSelected: string | ArrayBuffer;

  constructor( private photoServices: PhotoService,
               private router: Router
              ) { }

  ngOnInit() {
  }


  onPhotoSelectid( event: HtmlInputEvent ): void {
      if ( event.target.files && event.target.files[0] ) {
          this.file = event.target.files[0] as File;
          // Image Preview
          const reader = new FileReader();
          reader.onload = e => this.photoSelected = reader.result;
          reader.readAsDataURL(this.file);

      }
  }


  addPhoto( title: HTMLInputElement, descrption: HTMLTextAreaElement ): boolean {
      this.photoServices.add(title.value, descrption.value, this.file)
                        .subscribe( (photo: Photo ) => this.router.navigateByUrl('/photos'), err => console.log(err) );
      return false;
  }


}
