import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent } from 'angular2-carousel';
import { NgStyle } from '@angular/common';
import { delay } from 'q';
import { Slide } from '../../models/slide';
import { BabyGalleryService } from '../../services/baby-gallery.service';

@Component({
  selector: 'app-baby-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  public Slides: Slide[];
  id = '1OHL1ScVaVr9_3mETljENkDRWDN3VhiIIGQkXxr5jjwA';
  sheet = 1;

  @ViewChild('babyCarousel')
  babyCarousel: CarouselComponent;

  constructor(private babyGalleryService: BabyGalleryService) { }

  ngOnInit() {
    this.babyGalleryService.GetBabyGalleryPhotos(this.id, this.sheet)
      .subscribe(slides => {
        this.Slides = slides;
        this.babyCarousel.carousel.items = ['<div class="item-carousel">http://mnr2015.com/assets/whiteShoes.jpg</div>',
        'http://mnr2015.com/assets/whiteShoes.jpg', 'http://mnr2015.com/assets/whiteShoes.jpg'];

        this.babyCarousel.update();
      });

    this.babyCarousel.lockSlides = true;
  }

  restart() {
    delay(5000).then(() => {
      this.babyCarousel.slideTo(0);
    });
  }
}
