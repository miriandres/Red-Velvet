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

  prevNotice(){
    if( this.pag <= 0){
      this.pag = 1
    }
    this.pag--
  }
  nextNotice(){
    this.pag++
    if( this.pag === this.numPags ){
      this.pag = this.numPags - 1
    }
  }
  translate() : string {
    this.numPags = this.notice.length
    return 'translateX(-' + (this.pag * ( 100 / this.numPags )) + '%)'
  }

}
