import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: any;
  constructor(private service: AppService) { }

  ngOnInit(): void {
  }

  helloClick() {
    this.service.sendData(this.msg);
    localStorage.setItem('msg', this.msg);
  }

}
