import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend-app';
  hitType = 'LOCAL';
  data = "Service says: ";
  display = false;

  constructor(private appSvc: AppService) { }

  ngOnInit() {
  }

  getData(svc) {
    this.appSvc.getData(svc).subscribe(info => {
      console.log(info);
      this.data = "Service says: " + info.message;
      this.display = true;
    }, error => {
      console.log(error);
    });
  }
}
