import { Component, Input,OnInit } from '@angular/core';
import { Carousel } from '../../interface/carousel';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
  
  @Input() data: Carousel[] | undefined;
  @Input() type: string = 'image/url'; // image/data, html
  sanitizedHtml: SafeHtml[] = [];
  constructor(private sanitizer: DomSanitizer) {}


  ngOnInit(): void {
    if (this.type == "html" && this.data) {
      this.sanitizedHtml = this.data.map(item => this.sanitizer.bypassSecurityTrustHtml(item.img_data));
    }
  }
}
