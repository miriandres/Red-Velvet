import { Injectable } from '@angular/core';
import { GalleryData } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BbddService {

/* ------------------------ Home ----------------------- */
lightbox : any = [
  {
    src    : 'assets/img/home/icono-irene.jpg',
    srcset : 'assets/img/home/icono-irene.webp',
    alt    : 'Irene'
  },
  {
    src    : 'assets/img/home/icono-seulgi.jpg',
    srcset : 'assets/img/home/icono-seulgi.webp',
    alt    : 'Seulgi'
  },
  {
    src    : 'assets/img/home/icono-wendy.jpg',
    srcset : 'assets/img/home/icono-wendy.webp',
    alt    : 'Wendy'
  },
  {
    src    : 'assets/img/home/icono-joy.jpg',
    srcset : 'assets/img/home/icono-joy.webp',
    alt    : 'Joy'
  },
  {
    src    : 'assets/img/home/icono-yeri.jpg',
    srcset : 'assets/img/home/icono-yeri.webp',
    alt    : 'Yeri'
  }
]

/* ---------------------- Profile ---------------------- */
profile : any = [
  {
    h2    : 'Irene',
    bd    : 'Birthday : 1991.03.29',
    pos   : 'Position : Leader / Main Rapper / Visual',
    color : 'Official Color : Pink'
  },
  {
    h2    : 'Seulgi',
    bd    : 'Birthday : 1994.02.10',
    pos   : 'Position : Main Dancer / Lead Vocalist',
    color : 'Official Color : Yellow'
  },
  {
    h2    : 'Wendy',
    bd    : 'Birthday : 1994.02.21',
    pos   : 'Position : Main Vocalist',
    color : 'Official Color : Blue'
  },
  {
    h2    : 'Joy',
    bd    : 'Birthday : 1999.03.05',
    pos   : 'Position : Vocalist / Lead Rapper',
    color : 'Official Color : Green'
  },
  {
    h2    : 'Yeri',
    bd    : 'Birthday : 1994.02.10',
    pos   : 'Position : Maknae / Sub Rapper / Vocalist',
    color : 'Official Color : Purple'
  }
]

/* -------------------- Discography -------------------- */
albums = [
  [
    {
      webpLogo : 'assets/img/discography/album-logo-1.webp',
      logo     : 'assets/img/discography/album-logo-1.png',
      src      : 'assets/img/discography/album-1.jpg',
      srcset   : 'assets/img/discography/album-1.webp',
      alt      : 'The Reve Festival Finale'
    },
    {
      webpLogo : 'assets/img/discography/album-logo-2.webp',
      logo     : 'assets/img/discography/album-logo-2.png',
      src      : 'assets/img/discography/album-2.jpg',
      srcset   : 'assets/img/discography/album-2.webp',
      alt      : 'The Reve Festival Part 2'
    },
    {
      webpLogo : 'assets/img/discography/album-logo-3.webp',
      logo     : 'assets/img/discography/album-logo-3.png',
      src      : 'assets/img/discography/album-3.png',
      srcset   : 'assets/img/discography/album-3.webp',
      alt      : 'The Reve Festival Part 1'
    }
  ],
  [
    {
      webpLogo : 'assets/img/discography/album-logo-4.webp',
      logo     : 'assets/img/discography/album-logo-4.png',
      src      : 'assets/img/discography/album-4.jpg',
      srcset   : 'assets/img/discography/album-4.webp',
      alt      : 'RBB'
    },
    {
      webpLogo : 'assets/img/discography/album-logo-5.webp',
      logo     : 'assets/img/discography/album-logo-5.png',
      src      : 'assets/img/discography/album-5.png',
      srcset   : 'assets/img/discography/album-5.webp',
      alt      : 'Summer Magic'
    },
    {
      webpLogo : 'assets/img/discography/album-logo-6.webp',
      logo     : 'assets/img/discography/album-logo-6.png',
      src      : 'assets/img/discography/album-6.jpg',
      srcset   : 'assets/img/discography/album-6.webp',
      alt      : 'The Perfect Red Velvet'
    }
  ],
  [
    {
      webpLogo : 'assets/img/discography/album-logo-7.webp',
      logo     : 'assets/img/discography/album-logo-7.png',
      src      : 'assets/img/discography/album-7.jpg',
      srcset   : 'assets/img/discography/album-7.webp',
      alt      : 'Perfect Velvet'
    },
    {
      webpLogo : 'assets/img/discography/album-logo-8.webp',
      logo     : 'assets/img/discography/album-logo-8.png',
      src      : 'assets/img/discography/album-8.jpg',
      srcset   : 'assets/img/discography/album-8.webp',
      alt      : 'The Red Summer'
    },
    {
      webpLogo : 'assets/img/discography/album-logo-9.webp',
      logo     : 'assets/img/discography/album-logo-9.png',
      src      : 'assets/img/discography/album-9.jpg',
      srcset   : 'assets/img/discography/album-9.webp',
      alt      : 'Rookie'
    }
  ]
]

/* ---------------------- Gallery ---------------------- */
gallery : Array<GalleryData> = [
  {
    jpg    : [
      {
        small  : 'assets/img/gallery/gallery-1.jpg',
        medium : 'assets/img/gallery/gallery-1@1.jpg 1x',
        large  : 'assets/img/gallery/gallery-1@2.jpg 2x',
      }
    ],
    webp   : [
      {
        small  : 'assets/img/gallery/gallery-1.webp',
        medium : 'assets/img/gallery/gallery-1@1.webp 1x',
        large  : 'assets/img/gallery/gallery-1@2.webp 2x',
      }
    ],
    class  : 'grid__item grid__item--big',
    class2 : 'lightbox__img',
    alt    : 'Red Velvet group photo'
  },
  {
    jpg    : [
      {
        small  : 'assets/img/gallery/gallery-2.jpg',
        medium : 'assets/img/gallery/gallery-2@1.jpg 1x',
        large  : 'assets/img/gallery/gallery-2@2.jpg 2x',
      }
    ],
    webp   : [
      {
        small  : 'assets/img/gallery/gallery-2.webp',
        medium : 'assets/img/gallery/gallery-2@1.webp 1x',
        large  : 'assets/img/gallery/gallery-2@2.webp 2x',
      }
    ],
    class  : 'grid__item',
    class2 : 'lightbox__img',
    alt    : 'Seulgi with rose'
  },
  {
    jpg    : [
      {
        small  : 'assets/img/gallery/gallery-3.jpg',
        medium : 'assets/img/gallery/gallery-3@1.jpg 1x',
        large  : 'assets/img/gallery/gallery-3@2.jpg 2x',
      }
    ],
    webp   : [
      {
        small  : 'assets/img/gallery/gallery-3.webp',
        medium : 'assets/img/gallery/gallery-3@1.webp 1x',
        large  : 'assets/img/gallery/gallery-3@2.webp 2x',
      }
    ],
    class  : 'grid__item',
    class2 : 'lightbox__img',
    alt    : 'Yeri with rose'
  },
  {
    jpg    : [
      {
        small  : 'assets/img/gallery/gallery-4.jpg',
        medium : 'assets/img/gallery/gallery-4@1.jpg 1x',
        large  : 'assets/img/gallery/gallery-4@2.jpg 2x',
      }
    ],
    webp   : [
      {
        small  : 'assets/img/gallery/gallery-4.webp',
        medium : 'assets/img/gallery/gallery-4@1.webp 1x',
        large  : 'assets/img/gallery/gallery-4@2.webp 2x',
      }
    ],
    class  : 'grid__item grid__item--big',
    class2 : 'lightbox__img',
    alt    : 'Irene'
  },
  {
    jpg    : [
      {
        small  : 'assets/img/gallery/gallery-5.jpg',
        medium : 'assets/img/gallery/gallery-5@1.jpg 1x',
        large  : 'assets/img/gallery/gallery-5@2.jpg 2x',
      }
    ],
    webp   : [
      {
        small  : 'assets/img/gallery/gallery-5.webp',
        medium : 'assets/img/gallery/gallery-5@1.webp 1x',
        large  : 'assets/img/gallery/gallery-5@2.webp 2x',
      }
    ],
    class  : 'grid__item',
    class2 : 'lightbox__img',
    alt    : 'Irene with veil'
  },
  {
    jpg    : [
      {
        small  : 'assets/img/gallery/gallery-6.jpg',
        medium : 'assets/img/gallery/gallery-6@1.jpg 1x',
        large  : 'assets/img/gallery/gallery-6@2.jpg 2x',
      }
    ],
    webp   : [
      {
        small  : 'assets/img/gallery/gallery-6.webp',
        medium : 'assets/img/gallery/gallery-6@1.webp 1x',
        large  : 'assets/img/gallery/gallery-6@2.webp 2x',
      }
    ],
    class  : 'grid__item',
    class2 : 'lightbox__img',
    alt    : 'Joy with lantern'
  },
  {
    jpg    : [
      {
        small  : 'assets/img/gallery/gallery-7.jpg',
        medium : 'assets/img/gallery/gallery-7@1.jpg 1x',
        large  : 'assets/img/gallery/gallery-7@2.jpg 2x',
      }
    ],
    webp   : [
      {
        small  : 'assets/img/gallery/gallery-7.webp',
        medium : 'assets/img/gallery/gallery-7@1.webp 1x',
        large  : 'assets/img/gallery/gallery-7@2.webp 2x',
      }
    ],
    class  : 'grid__item',
    class2 : 'lightbox__img',
    alt    : 'Yeri with lantern'
  },
  {
    jpg    : [
      {
        small  : 'assets/img/gallery/gallery-8.jpg',
        medium  : 'assets/img/gallery/gallery-8@1.jpg 1x',
        large  : 'assets/img/gallery/gallery-8@2.jpg 2x',
      }
    ],
    webp   : [
      {
        small  : 'assets/img/gallery/gallery-8.webp',
        medium : 'assets/img/gallery/gallery-8@1.webp 1x',
        large  : 'assets/img/gallery/gallery-8@2.webp 2x',
      }
    ],
    class  : 'grid__item',
    class2 : 'lightbox__img',
    alt    : 'Wendy with lantern'
  },
  {
    jpg    : [
      {
        small  : 'assets/img/gallery/gallery-9.jpg',
        medium : 'assets/img/gallery/gallery-9@1.jpg 1x',
        large  : 'assets/img/gallery/gallery-9@2.jpg 2x',
      }
    ],
    webp   : [
      {
        small  : 'assets/img/gallery/gallery-9.webp',
        medium : 'assets/img/gallery/gallery-9@1.webp 1x',
        large  : 'assets/img/gallery/gallery-9@2.webp 2x',
      }
    ],
    class  : 'grid__item grid__item--big',
    class2 : 'lightbox__img',
    alt    : 'Wendy'
  },
  {
    jpg    : [
      {
        small  : 'assets/img/gallery/gallery-10.jpg',
        medium : 'assets/img/gallery/gallery-10@1.jpg 1x',
        large  : 'assets/img/gallery/gallery-10@2.jpg 2x',
      }
    ],
    webp   : [
      {
        small  : 'assets/img/gallery/gallery-10.webp',
        medium : 'assets/img/gallery/gallery-10@1.webp 1x',
        large  : 'assets/img/gallery/gallery-10@2.webp 2x',
      }
    ],
    class  : 'grid__item',
    class2 : 'lightbox__img',
    alt    : 'Seulgi sitting'
  },
  {
    jpg    : [
      {
        small  : 'assets/img/gallery/gallery-11.jpg',
        medium : 'assets/img/gallery/gallery-11@1.jpg 1x',
        large  : 'assets/img/gallery/gallery-11@2.jpg 2x',
      }
    ],
    webp   : [
      {
        small  : 'assets/img/gallery/gallery-11.webp',
        medium : 'assets/img/gallery/gallery-11@1.webp 1x',
        large  : 'assets/img/gallery/gallery-11@2.webp 2x',
      }
    ],
    class  : 'grid__item',
    class2 : 'lightbox__img',
    alt    : 'Wendy with umbrella'
  },
  {
    jpg    : [
      {
        small  : 'assets/img/gallery/gallery-12.jpg',
        medium : 'assets/img/gallery/gallery-12@1.jpg 1x',
        large  : 'assets/img/gallery/gallery-12@2.jpg 2x',
      }
    ],
    webp   : [
      {
        small  : 'assets/img/gallery/gallery-12.webp',
        medium : 'assets/img/gallery/gallery-12@1.webp 1x',
        large  : 'assets/img/gallery/gallery-12@2.webp 2x',
      }
    ],
    class  : 'grid__item grid__item--big',
    class2 : 'lightbox__img',
    alt    : 'Red Velvet group portrait'
  },
  {
    jpg    : [
      {
        small  : 'assets/img/gallery/gallery-13.jpg',
        medium : 'assets/img/gallery/gallery-13@1.jpg 1x',
        large  : 'assets/img/gallery/gallery-13@2.jpg 2x',
      }
    ],
    webp   : [
      {
        small  : 'assets/img/gallery/gallery-13.webp',
        medium : 'assets/img/gallery/gallery-13@1.webp 1x',
        large  : 'assets/img/gallery/gallery-13@2.webp 2x',
      }
    ],
    class  : 'grid__item grid__item--big',
    class2 : 'lightbox__img',
    alt    : 'Red Velvet night group portrait'
  },
  {
    jpg    : [
      {
        small  : 'assets/img/gallery/gallery-14.jpg',
        medium : 'assets/img/gallery/gallery-14@1.jpg 1x',
        large  : 'assets/img/gallery/gallery-14@2.jpg 2x',
      }
    ],
    webp   : [
      {
        small  : 'assets/img/gallery/gallery-14.webp',
        medium : 'assets/img/gallery/gallery-14@1.webp 1x',
        large  : 'assets/img/gallery/gallery-14@2.webp 2x',
      }
    ],
    class  : 'grid__item',
    class2 : 'lightbox__img',
    alt    : 'Irene'
  },
  {
    jpg    : [
      {
        small  : 'assets/img/gallery/gallery-15.jpg',
        medium : 'assets/img/gallery/gallery-15@1.jpg 1x',
        large  : 'assets/img/gallery/gallery-15@2.jpg 2x',
      }
    ],
    webp   : [
      {
        small  : 'assets/img/gallery/gallery-15.webp',
        medium : 'assets/img/gallery/gallery-15@1.webp 1x',
        large  : 'assets/img/gallery/gallery-15@2.webp 2x',
      }
    ],
    class  : 'grid__item',
    class2 : 'lightbox__img',
    alt    : 'Seulgi'
  },
  {
    jpg    : [
      {
        small  : 'assets/img/gallery/gallery-16.jpg',
        medium : 'assets/img/gallery/gallery-16@1.jpg 1x',
        large  : 'assets/img/gallery/gallery-16@2.jpg 2x',
      }
    ],
    webp   : [
      {
        small  : 'assets/img/gallery/gallery-16.webp',
        medium : 'assets/img/gallery/gallery-16@1.webp 1x',
        large  : 'assets/img/gallery/gallery-16@2.webp 2x',
      }
    ],
    class  : 'grid__item',
    class2 : 'lightbox__img',
    alt    : 'Yeri in black & white'
  }

]

/* ----------------------- Videos ---------------------- */
videos : any = [
  {
    img     : 'assets/video/video-icono-1.jpg',
    srcset  : 'assets/video/video-icono-1.webp',
    alt     : 'Red Velvet - IRENE & SEULGI Monster MV',
    href    : 'https://www.youtube.com/watch?v=Ujb-gvqsoi0&ab_channel=SMTOWN',
    gif     : 'assets/video/gif-1.gif'
  },
  {
    img     : 'assets/video/video-icono-2.jpg',
    srcset  : 'assets/video/video-icono-2.webp',
    alt     : 'Red Velvet - Psycho MV',   
    href    : 'https://www.youtube.com/watch?v=uR8Mrt1IpXg&ab_channel=SMTOWN',
    gif     : 'assets/video/gif-2.gif'
  },
  {
    img     : 'assets/video/video-icono-3.jpg',
    srcset  : 'assets/video/video-icono-3.webp',
    alt     : 'Red Velvet - 음파음파 (Umpah Umpah) MV',
    href    : 'https://www.youtube.com/watch?v=vHS9E6JFja8&ab_channel=SMTOWN',
    gif     : 'assets/video/gif-3.gif'
  },
  {
    img     : 'assets/video/video-icono-4.jpg',
    srcset  : 'assets/video/video-icono-4.webp',
    alt     : 'Red Velvet - 짐살라빔 (Zimzalabim) MV',
    href    : 'https://www.youtube.com/watch?v=YBnGBb1wg98&ab_channel=SMTOWN',
    gif     : 'assets/video/gif-4.gif'
  },
  {
    img     : 'assets/video/video-icono-5.jpg',
    srcset  : 'assets/video/video-icono-5.webp',
    alt     : 'Red Velvet - RBB (Really Bad Boy) MV',
    href    : 'https://www.youtube.com/watch?v=IWJUPY-2EIM&ab_channel=SMTOWN',
    gif     : 'assets/video/gif-5.gif'
  },
  {
    img     : 'assets/video/video-icono-6.jpg',
    srcset  : 'assets/video/video-icono-6.webp',
    alt     : 'Red Velvet - Power Up MV',
    href    : 'https://www.youtube.com/watch?v=aiHSVQy9xN8&ab_channel=SMTOWN',
    gif     : 'assets/video/gif-6.gif'
  },
  {
    img     : 'assets/video/video-icono-7.jpg',
    srcset  : 'assets/video/video-icono-7.webp',
    alt     : 'Red Velvet - Bad Boy MV',
    href    : 'https://www.youtube.com/watch?v=J_CFBjAyPWE&ab_channel=SMTOWN',
    gif     : 'assets/video/gif-7.gif'
  },
  {
    img     : 'assets/video/video-icono-8.jpg',
    srcset  : 'assets/video/video-icono-8.webp',
    alt     : 'Red Velvet - 피카부 (Peek-A-Boo) MV',
    href    : 'https://www.youtube.com/watch?v=6uJf2IT2Zh8&ab_channel=SMTOWN',
    gif     : 'assets/video/gif-8.gif'
  },
  {
    img     : 'assets/video/video-icono-9.jpg',
    srcset  : 'assets/video/video-icono-9.webp',
    alt     : 'Red Velvet - 빨간 맛 (Red Flavor) MV',
    href    : 'https://www.youtube.com/watch?v=WyiIGEHQP8o&ab_channel=SMTOWN',
    gif     : 'assets/video/gif-9.gif'
  }
] 

/* ----------------------- Notice ---------------------- */
notice : any = [
  [
    {
      num     : "578",
      header  : "2021 SM ARTIST SEASON'S GREETINGS Red Velvet - 상세 구성 안내",
      date    : "2020.11.05."
    },
    {
      num     : "577",
      header  : "SM엔터테인먼트입니다.",
      date    : "2020.11.02."
    },
    {
      num     : "576",
      header  : "2021 SM ARTIST SEASON'S GREETINGS Red Velvet - 예약 판매 안내",
      date    : "2020.10.30."
    },
    {
      num     : "575",
      header  : "Red Velvet X Good Luck Trolls 팝업 스토어 - 온라인 판매 안내!",
      date    : "2020.08.21."
    },
    {
      num     : "574",
      header  : "Red Velvet x Good Luck Trolls 팝업 스토어 안내!",
      date    : "2020.08.10."
    },
    {
      num     : "573",
      header  : "Red Velvet 3rd Concert - La Rouge 공연화보 예약판매 안내!",
      date    : "2020.05.22."
    },
    {
      num     : "572",
      header  : "Red Velvet OFFICIAL FANCLUB 'ReVeluv' ACE 회원 연장 안내",
      date    : "2020.02.08."
    }
  ],
  [
    {
      num     : "571",
      header  : "1월 28일 (화) SBS '진짜 농구, 핸섬 타이거즈' 참여 신청 안내 - 조이",
      date    : "2020.01.22."
    },
    {
      num     : "570",
      header  : "12월 26일 (목) 2019 KBS 가요대축제 - 사전녹화 참여안내!",
      date    : "2019.12.24."
    },
    {
      num     : "569",
      header  : "응원법 안내 - 'Psycho'",
      date    : "2020.11.05."
    },
    {
      num     : "568",
      header  : "12월 25일 (수) '2019 SBS 가요대전' 생방송 참여안내!",
      date    : "2019.12.23."
    },
    {
      num     : "567",
      header  : "12월 24일 (화) 스페셜 이벤트 'ReVe Festival Finale' - 참여안내",
      date    : "2019.12.21."
    },
    {
      num     : "566",
      header  : "12월 23일 (월) '2019 SBS 가요대전' - 사전녹화 참여안내!",
      date    : "2019.12.20."
    },
    {
      num     : "565",
      header  : "Repackage Album ['The ReVe Festival' Finale] 발매기념 사인회 (삼성동)",
      date    : "2019.12.19."
    }
  ],
  [
    {
      num     : "564",
      header  : "12월 16일 (월) SBS '진짜 농구, 핸섬 타이거즈' 참여 신청 안내 - 조이",
      date    : "2019.12.14."
    },
    {
      num     : "563",
      header  : "Red Velvet 3rd Concert - La Rouge - 공식 응원봉 운영 안내",
      date    : "2019.11.19."
    },
    {
      num     : "562",
      header  : "Red Velvet 3rd Concert - La Rouge - OFFICIAL MD 현장 판매 안내!",
      date    : "2019.11.11."
    },
    {
      num     : "561",
      header  : "Red Velvet 3rd Concert - La Rouge - OFFICIAL MD 온라인 판매 안내",
      date    : "2019.11.08."
    },
    {
      num     : "560",
      header  : "2020 SM ARTIST SEASON'S GREETINGS Red Velvet. 상세 구성 안내",
      date    : "2019.11.05."
    },
    {
      num     : "559",
      header  : "2020 SM ARTIST SEASON'S GREETINGS Red Velvet - 예약 판매 안내",
      date    : "2019.10.31."
    },
    {
      num     : "558",
      header  : "Red Velvet 3rd Concert - La Rouge 예매 & 입장 주의사항",
      date    : "2019.10.28."
    }
  ]
]

  constructor() { }
}
