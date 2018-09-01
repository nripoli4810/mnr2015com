import { Component, OnInit } from '@angular/core';
import { Shower } from '../../models/shower';
import { BabyService } from '../../services/baby.service';

@Component({
  selector: 'app-shower',
  templateUrl: './shower.component.html',
  styleUrls: ['./shower.component.css']
})
export class ShowerComponent implements OnInit {

  mockShowers: Shower[];

  constructor(private babyService: BabyService) {
  }

  ngOnInit() {
    this.babyService.GetShowerInformation()
      .subscribe(showers => this.mockShowers = showers);
  }

}
