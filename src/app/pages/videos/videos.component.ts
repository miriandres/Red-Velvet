import { Component, OnInit } from '@angular/core';
import { BbddService } from 'src/app/services/bbdd.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  photo = -1
  videos : any = []
  toggle  : Array<boolean> = Array(17).fill(false)

  constructor(
    private bbdd : BbddService
  ) { 
    this.videos = bbdd.videos
    this.toggle = Array(this.videos.length).fill(false)
  }

  ngOnInit(): void {
  }

  show( x : number ) : void {
    this.photo = x
  }
}
