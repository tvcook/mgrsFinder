import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading-banner',
  templateUrl: './heading-banner.component.html',
  styleUrls: ['./heading-banner.component.scss']
})
export class HeadingBannerComponent implements OnInit {
  iconAssetUrl: string | undefined;
  headingText: string | undefined;
  subHeadingText: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.iconAssetUrl = "../assets/icon.png";
    this.headingText = "MGRS Finder";
    this.subHeadingText = "Enter Military Grid Reference System (MGRS) coordinates and get links to that location for various map apps.";
  }

}
