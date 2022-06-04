import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscographyComponent } from './pages/discography/discography.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { NoticeComponent } from './pages/notice/notice.component';
import { Page404Component } from './pages/page404/page404.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { VideosComponent } from './pages/videos/videos.component';

const routes: Routes = [
  { path : 'profile'     , component : ProfileComponent},
  { path : 'discography' , component : DiscographyComponent},
  { path : 'gallery'     , component : GalleryComponent},
  { path : 'videos'      , component : VideosComponent},
  { path : 'notice'      , component : NoticeComponent},
  { path : ''            , component : HomeComponent},
  { path : '**'          , component : Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
