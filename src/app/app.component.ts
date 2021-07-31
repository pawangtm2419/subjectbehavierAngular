import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'subjectBehavier';
  msg: any;
  subscribeLogin!: Subscription;
  constructor(private service: AppService, public route: Router) { }

  ngOnInit() {
    this.subscribeLogin = this.service.getMsg().subscribe(msg =>
      this.msg = msg
    );
  }

  ngOnDestroy() {
    this.subscribeLogin.unsubscribe();
  }

}
