import { Component, OnInit } from '@angular/core';
import { BbddService } from 'src/app/services/bbdd.service';

@Component({
  selector: 'app-discography',
  templateUrl: './discography.component.html',
  styleUrls: ['./discography.component.scss']
})
export class DiscographyComponent implements OnInit {

  position = 0
  width    !: number
  albums   : any = []

  constructor(
    private bbdd : BbddService
  ) {
    this.albums = bbdd.albums
   }

  ngOnInit(): void {
  }

  translate() : string {
    this.width = this.albums.length
    return 'translateX(-' + (this.position * ( 100 / this.width )) + '%)'
  }
  setPosition( x : number ) : void {
    this.position = x
  }
}