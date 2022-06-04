import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscographyComponent } from './discography/discography.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NoticeComponent } from './notice/notice.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { Page404Component } from './page404/page404.component';



@NgModule({
  declarations: [
    DiscographyComponent,
    GalleryComponent,
    NoticeComponent,
    ProfileComponent,
    HomeComponent,
    VideosComponent,
    Page404Component
  ],
  imports: [
    CommonModule
  ],
    exports: [
    DiscographyComponent,
    GalleryComponent,
    NoticeComponent,
    ProfileComponent,
    HomeComponent,
    VideosComponent,
    Page404Component
  ]
})
export class PagesModule { }
