import { Component, OnInit } from '@angular/core';
import { BbddService } from 'src/app/services/bbdd.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  posicion : number = 0
  profile  : any = []

  constructor(
    private bbdd : BbddService
  ) { 
    this.profile = bbdd.profile
  }

  ngOnInit(): void {
  }

  mostrar( x : number) : void {
    this.posicion = x
  }

}
