import { Component, OnInit } from '@angular/core';
import { BbddService } from 'src/app/services/bbdd.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {

  pag = 0
  notice : any = []

  constructor(
    private bbdd : BbddService
  ) { 
    this.notice = bbdd.notice
  }

  ngOnInit(): void {
  }

// --------------- SLIDER -------------
  numPags = this.notice.length

  // Desplazar Slider hacia atrás
  anterior(){
    if( this.pag <= 0){
      this.pag = 1
    }
    this.pag--
  }

  // Desplazar Slider hacia delante
  siguiente(){
    this.pag++
    if( this.pag === this.numPags ){
       this.pag = this.numPags - 1
     }
  }

  // Desplazamiento del Slider
  desplazar() : string {
    this.numPags = this.notice.length
    return 'translateX(-' + (this.pag * ( 100 / this.numPags )) + '%)'
  }

}
