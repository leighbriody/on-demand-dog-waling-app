import { Component, OnInit } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';
import { DataService, Dog } from 'src/app/services/data.service';

@Component({
  selector: 'app-owner-pets',
  templateUrl: './owner-pets.page.html',
  styleUrls: ['./owner-pets.page.scss', '../../../../tabs.scss'],
})
export class OwnerPetsPage implements OnInit {


  userLoggedIn: boolean = false;
  ownersPets: Dog[];
  constructor(private dataService: DataService, private auth: AuthService) {



  }

  ngOnInit() {

    this.dataService.getAllOwnersPets().subscribe(res => {
      console.log("All pets in data res", res);
      this.ownersPets = res;
    })

  }

}
