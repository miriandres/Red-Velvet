import { Component, OnInit } from '@angular/core';
import { MenuRRSS } from 'src/app/interfaces/interfaces';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-rrss',
  templateUrl: './rrss.component.html',
  styleUrls: ['./rrss.component.scss']
})
export class RrssComponent implements OnInit {

  rrss : Array<MenuRRSS> = []

  constructor(
    private appService : AppService
  ) {
    this.rrss = appService.rrss
   }

  ngOnInit(): void {
  }

}
