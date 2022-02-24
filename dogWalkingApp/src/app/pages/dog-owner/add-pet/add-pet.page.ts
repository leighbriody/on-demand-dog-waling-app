import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.page.html',
  styleUrls: ['./add-pet.page.scss'],
})
export class AddPetPage implements OnInit {

  name: string;
  breed: string;
  age: number;
  description: string;
  gender: string;
  height: string;


  constructor(private data: DataService) { }

  ngOnInit() {
  }

  addNewPet() {
    //need to add new pet to users data
    this.data.addNewPet({ id: "", name: this.name, breed: this.breed, age: this.age, description: this.description, gender: this.gender, height: this.height, isChecked: false });

    //implement success or failure message

  }

}
