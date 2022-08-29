import { Component, HostListener, OnInit } from '@angular/core';
import { GalleryData } from 'src/app/interfaces/interfaces';
import { BbddService } from 'src/app/services/bbdd.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  photo = 0
  gallery : Array<GalleryData> = []
  toggle  : Array<boolean> = Array(17).fill(false)

  constructor(
    private bbdd : BbddService
  ) {
    this.gallery = this.bbdd.gallery
    this.toggle = Array(this.gallery.length).fill(false)
   }

  ngOnInit(): void {
  }

  trackByItems(index: number, item: any) : number {return index;}

  show( x : number ) : void {
    this.photo = x
    this.toggle[x] = !this.toggle[x]
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.toggle[this.photo] = false
  }
}
