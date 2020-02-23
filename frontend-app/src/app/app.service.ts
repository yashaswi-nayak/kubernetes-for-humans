import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpCli: HttpClient) { }

  getData(): Observable<any> {
    let getUrl = environment.backendUrl + '/my-data';
    return this.httpCli.get(getUrl);
  }
}
