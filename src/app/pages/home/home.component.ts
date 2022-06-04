import { Component, OnInit } from '@angular/core';
import { BbddService } from 'src/app/services/bbdd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posicion : number = 4
  lightbox : any = []

  constructor(
    private bbdd : BbddService
  ) {
        this.lightbox = bbdd.lightbox
   }

  ngOnInit(): void {
  }

  mostrar( x : number) : void {
    this.posicion = x
    // console.log(x)
  }

}
