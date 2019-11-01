import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

// MODELS
import { Photo } from '../../models/photo.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  uri = environment.URI;

  constructor( private http: HttpClient ) { }

  add( title: string, description: string, photo: File ): Observable<Photo> {
    // Create Form
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', photo);

    return this.http.post<Photo>(this.uri, fd);
  }

  all(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.uri)
                    .pipe(
                      map( (photos: any ) => {
                          return photos.data;
                      })
                    );
  }

  get( id: string ): Observable<Photo> {
    return this.http.get<Photo>(`${this.uri}/${id}`)
                    .pipe(
                      map( ( photo: any ) => {
                          return photo.data;
                      })
    );
  }

  update( id: string, title: string, description: string ): Observable<Photo> {
     return this.http.put<Photo>(`${this.uri}/${id}`, { title, description });
  }

  delete( id: string ): Observable<Photo> {
    return this.http.delete<Photo>(`${this.uri}/${id}`);
  }

}
