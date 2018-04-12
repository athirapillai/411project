import { Injectable } from '@angular/core';
import { FileUploadModel } from './file-upload-model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ImageService {

  apiurl="http://localhost:8080/api"

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
    return this.http.get<FileUploadModel[]>(this.apiurl+"/images", { params: new HttpParams().set('album',albumName) });
  }


}
