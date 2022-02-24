import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-home',
  templateUrl: './owner-home.page.html',
  styleUrls: ['./owner-home.page.scss', '../../../../tabs.scss'],
})
export class OwnerHomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  needWalkingRedirect() {
    console.log("clicked");
    this.router.navigateByUrl('/choose-walk-details');
  }

  test() {
    console.log("test");
  }

}
