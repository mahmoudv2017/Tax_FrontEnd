import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private account:AccountService) {}
  ngOnInit(): void {

      this.account.LoadCurrentUser()

  }
  title = 'Frontend';
}
