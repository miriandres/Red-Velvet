import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MenuLi } from 'src/app/interfaces/interfaces';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu     : Array<MenuLi> = []
  toggle   : boolean = false
  isFixed  : boolean = false

  @HostListener('window:scroll', ['$event']) onscroll(){
    let pixel = window.scrollY
    if(pixel > 5){
      this.isFixed = true
    } else {
      this.isFixed = false
    }
  }

  constructor(
    private appService : AppService,
    @Inject(DOCUMENT) private document : Document
  ) { 
    this.menu = appService.menu
  }

  ngOnInit(): void {
  }
  toggleBtn() : void {
    this.toggle = !this.toggle
    if(this.toggle == true){
      this.document.body.classList.add('no-scroll')
    } else {
      this.document.body.classList.remove('no-scroll')
    }
  }
  closeNav() : void {
    this.toggle = false;
    this.document.body.classList.remove('no-scroll');
  }
}
