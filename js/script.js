var app = new Vue ({
  el: '#app',
  data: {
    logoImg: 'logo.png',
    arrayHeader: [
      // for the crack
      // block four
      // {
      //   icon: 'null',
      //   title: 'null',
      //   description: 'null',
      //   img: 'img/logo.png'
      // },
      // block one
      {
        icon: 'fas fa-home',
        title: 'null',
        description: 'null',
        img: 'null'
      },
      // block two
      {
        icon: ['fab', 'fa-pagelines'],
        title: 'TREATMENTS',
        description: 'Face&Body',
        img: 'null'
      },
      // block three
      {
        icon: ['fas', 'fa-male'],
        title: 'ABOUT',
        description: 'Our Team',
        img: 'null'
      },
      // block four
      {
        icon: 'null',
        title: 'null',
        description: 'null',
        img: 'img/logo.png'
      },
      // block five
      {
        icon: ['fas', 'fa-heart'],
        title: 'JOURNAL',
        description: 'Tips & Tricks',
        img: 'null'
      },
      // block six
      {
        icon: ['fas', 'fa-bookmark'],
        title: 'BOOK NOW',
        description: 'Special Offers',
        img: 'null'
      },
      // block seven
      {
        icon: ['fas', 'fa-plus'],
        title: 'null',
        description: 'null',
        img: 'null'
      }
      // ,
      // // for the crack
      // {
      //   icon: ['fas', 'fa-heart'],
      //   title: 'JOURNAL',
      //   description: 'Tips & Tricks',
      //   img: 'null'
      // }
    ],
    arrayHref: ['https://www.google.it/'],
    arrayLinkFoot: ['@ COPYRIGHT 2012-2020', 'AVADA THEME BY THEMEFUSION', 'ALL RIGHT RESERVED', 'POWERED BY WORDPRESS'],
    arrayIconFooter: ['fa-facebook-f', 'fa-twitter', 'fa-instagram', 'fa-youtube']
  }
})
