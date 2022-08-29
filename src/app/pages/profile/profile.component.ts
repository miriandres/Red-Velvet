import { Component, OnInit } from '@angular/core';
import { BbddService } from 'src/app/services/bbdd.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  position : number = 0
  profile  : any = []

  constructor(
    private bbdd : BbddService
  ) { 
    this.profile = bbdd.profile
  }

  ngOnInit(): void {
  }

  show( x : number) : void {
    this.position = x
  }

}
