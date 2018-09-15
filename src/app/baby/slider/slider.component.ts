import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent } from 'angular2-carousel';
import { NgStyle } from '@angular/common';
import { delay } from 'q';
import { MockSlides } from '../../mock/slides';
import { Slide } from '../../models/slide';

@Component({
  selector: 'app-baby-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  public Slides: Slide[];

  @ViewChild('babyCarousel')
  babyCarousel: CarouselComponent;

  constructor() {}

  ngOnInit() {
    this.Slides = MockSlides;
    this.babyCarousel.lockSlides = true;
  }

  restart() {
    delay(5000).then(() => {
      this.babyCarousel.slideTo(0);
    });
  }
}
