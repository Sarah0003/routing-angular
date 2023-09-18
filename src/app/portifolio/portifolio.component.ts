// import { Component } from '@angular/core';
// import { Lightbox } from 'ngx-lightbox';

// @Component({
//   selector: 'app-portifolio',
//   templateUrl: './portifolio.component.html',
//   styleUrls: ['./portifolio.component.css','./lightbox.css']
// })
// export class PortifolioComponent {
//   private _lightbox: Lightbox;

//   constructor(private lightbox: Lightbox) {
//     this._lightbox = lightbox;
//   }



  
//   openImage(imageUrl: string) {
//     const album = [{
//       src: imageUrl,
//       caption: '',
//       thumb: ''
//     }];

//     this._lightbox.open(album, 0, {
//       wrapAround: true,
//       showImageNumberLabel: true,
//     });
//   }
// }
import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})




export class PortifolioComponent {
  private _lightbox: Lightbox;
  
    constructor(private lightbox: Lightbox) {
      this._lightbox = lightbox;
    }


  imageUrls: string[] = [
    'assets/Images/port1.png',
    'assets/Images/port2.png',
    'assets/Images/port3.png',
    'assets/Images/port1.png',
    'assets/Images/port2.png',
    'assets/Images/port3.png'
  ];

  openImage(imageUrl: string) {
    const album = [{
            src: imageUrl,
            caption: '',
            thumb: ''
          }];
      
          this._lightbox.open(album, 0, {
            wrapAround: true,
            showImageNumberLabel: true,
          });
        } 
      
      }
