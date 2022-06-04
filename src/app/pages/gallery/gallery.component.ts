import { Component, HostListener, OnInit } from '@angular/core';
import { GalleryData } from 'src/app/interfaces/interfaces';
import { BbddService } from 'src/app/services/bbdd.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  foto = 0
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

// Lightbox ( mostrar / dejar de ver )
  mostrar( x : number ) : void {
    this.foto = x
    this.toggle[x] = !this.toggle[x]
  }

// Cerrar Lightbox al pulsar tecla Escape
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.toggle[this.foto] = false
  }
}
