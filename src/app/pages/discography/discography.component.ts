import { Component, OnInit } from '@angular/core';
import { BbddService } from 'src/app/services/bbdd.service';

@Component({
  selector: 'app-discography',
  templateUrl: './discography.component.html',
  styleUrls: ['./discography.component.scss']
})
export class DiscographyComponent implements OnInit {

  posicion = 0
  ancho    !: number
  albums   : any = []

  constructor(
    private bbdd : BbddService
  ) {
    this.albums = bbdd.albums
   }

  ngOnInit(): void {
  }

// Desplazamiento Slider
  desplazar() : string {
    this.ancho = this.albums.length
    return 'translateX(-' + (this.posicion * ( 100 / this.ancho )) + '%)'
  }
  cambiar( x : number ) : void {
    this.posicion = x
  }
}