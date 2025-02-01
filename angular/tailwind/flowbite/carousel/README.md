# IMPORT COMPONET
```ts
import { CarouselComponent } from '../../core/components/carousel/carousel.component';
import { Carousel } from '../../core/interface/carousel';
```

# ADD DATA FOR COMPONET
```ts
carouselData: Carousel[] = [
    {
      img_data: '/image/banner-1.png',
      clickUrl: null
    },
    {
      img_data: '/image/banner-1.png',
      clickUrl: null
    },
    {
      img_data: '/image/banner-1.png',
      clickUrl: null
    },
    {
      img_data: '/image/banner-1.png',
      clickUrl: null
    }
  ];
```
# add on html
```html
@if (carouselData != undefined) {
    <app-carousel [data]="carouselData" type="image/url" style="width: 100%; height: 100%;"></app-carousel>
    <app-carousel [data]="carouselData" type="image/data" style="width: 100%; height: 100%;"></app-carousel>
    <app-carousel [data]="carouselData" type="html" style="width: 100%; height: 100%;"></app-carousel>
}
```