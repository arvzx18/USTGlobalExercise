import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetJSONService {
  constructor(private http: HttpClient) { }

  getContentJSON(): Observable<any> {
    return this.http.get('./assets/matter.json')
  }
}
