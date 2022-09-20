import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http:HttpClient) { }
  getDataAlbums(id: any):Observable<any>{
    const base = "https://jsonplaceholder.typicode.com/users/";
    const ud = id;
    const complement = "/albums";
    const url = base + ud + complement;
    return this.http.get<any>(url);
  }
}
