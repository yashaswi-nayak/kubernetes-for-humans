import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpCli: HttpClient) { }

  getData(svc): Observable<any> {
    let getUrl = environment.backendUrl;
    switch (svc) {
      case '1': getUrl = getUrl + '/uno/my-data'; break;
      case '2': getUrl = getUrl + '/dos/'; break;
      case '3': getUrl = getUrl + '/tres/my-data'; break;
    }
    return this.httpCli.get(getUrl);
  }
}
