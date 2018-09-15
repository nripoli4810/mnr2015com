import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent } from 'angular2-carousel';
import { NgStyle } from '@angular/common';
import { delay } from 'q';

@Component({
  selector: 'app-baby-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  public Slides: [
    'https://static.ferrarinetwork.ferrari.com/images/GTW_ferrari-488-pista-piloti-ferrari-full_OY7MW9jW.jpg',
    '../../../assets/babySlides/2.jpg',
    '../../../assets/babySlides/3.jpg',
    '../../../assets/babySlides/4.jpg',
    '../../../assets/babySlides/5.jpg'
  ];

  @ViewChild('babyCarousel')
  babyCarousel: CarouselComponent;

  constructor() {}

  ngOnInit() {
    this.babyCarousel.lockSlides = true;
  }

  restart() {
    delay(5000).then(() => {
      this.babyCarousel.slideTo(0);
    });
  }
}
