import { Injectable } from '@angular/core';
import { MenuLi, MenuRRSS } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppService {

 /* ------------------------ Menu ----------------------- */
  menu : Array<MenuLi> = [
    {
      route : '/profile',
      h2    : 'Profile'
    },
    {
      route : '/discography',
      h2    : 'Discography'
    },
    {
      route : '/gallery',
      h2    : 'Gallery'
    },
    {
      route : '/videos',
      h2    : 'Video'
    },
    {
      route : '/notice',
      h2    : 'Notice'
    }
  ]

  rrss : Array<MenuRRSS> = [
  {
    href   : 'https://www.facebook.com/RedVelvet/',
    src    : 'assets/iconos/facebook.svg',
    title  : 'Página de Facebook',
    alt    : 'Facebook - Red Velvet'
  },
  {
    href   : 'https://twitter.com/RVsmtown',
    src    : 'assets/iconos/twitter.svg',
    title  : 'Página de Twitter',
    alt    : 'Twitter - Red Velvet'
  },
  {
    href   : 'https://www.instagram.com/redvelvet.smtown',
    src    : 'assets/iconos/instagram.svg',
    title  : 'Página de Instagram',
    alt    : 'Instagram - Red Velvet'
  },
  {
    href   : 'https://www.youtube.com/redvelvet',
    src    : 'assets/iconos/youtube.svg',
    title  : 'Página de Youtube',
    alt    : 'Youtube - Red Velvet'
  },
  {
    href   : 'https://weibo.com/RedVelvetofficial',
    src    : 'assets/iconos/weibo.svg',
    title  : 'Página de Weibo',
    alt    : 'Weibo - Red Velvet'
  }
  ]
  constructor() { }
}
