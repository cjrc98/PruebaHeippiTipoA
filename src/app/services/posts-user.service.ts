import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsUserService {

  constructor(private http:HttpClient) { }
  getDataPostsUsers(id: any):Observable<any>{
    const base = "https://jsonplaceholder.typicode.com/users/";
    const ud = id;
    const complement = "/posts";
    const url = base + ud + complement;
    return this.http.get<any>(url);
  }
}
