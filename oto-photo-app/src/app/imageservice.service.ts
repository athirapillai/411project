import { Injectable } from '@angular/core';
import { FileUploadModel } from './file-upload-model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ImageService {

  apiurl="http://otophoto-env.us-east-2.elasticbeanstalk.com/api"

  constructor(private http: HttpClient) { }

  uploadImage(fileuploadmodel: FileUploadModel): Observable<any> {
    const formObject: FormData = new FormData();
      for (const key in fileuploadmodel) {
        if (fileuploadmodel.hasOwnProperty(key) && fileuploadmodel[key] !== null && key !== 'file') {
          formObject.append(key, fileuploadmodel[key]);
        }
      }
      if (fileuploadmodel.file) {
        formObject.append('file', fileuploadmodel.file, fileuploadmodel.file.name);
      }

    return this.http.post<FileUploadModel>(this.apiurl+"/upload", formObject, {});
  }

  getImagesByAlbum(albumName: string){
    return this.http.get<any[]>(this.apiurl+"/images", { params: new HttpParams().set('album',albumName) });
  }

  favoriteImage(userid: string, imageId: number) {
    let params = new HttpParams();
    params = params.set('userid', userid);
    params = params.set('imageId', imageId.toString());
    return this.http.post<any>(this.apiurl+"/favorites", params, {});
  }

  getFavorites(userid: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiurl+"/favorites", { params: new HttpParams().set('userid',userid) });
  }

}
