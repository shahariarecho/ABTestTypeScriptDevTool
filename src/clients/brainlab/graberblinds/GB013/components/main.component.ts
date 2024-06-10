import { Initializer } from "../../../../../utilities/initializer";
import { selectors, swiperLibrary } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { Loader } from "../loaders/loader";
import { CarouselComponent } from "./carousel.component";

export class MainComponent {
  carouselComponent: CarouselComponent = new CarouselComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  loadSwiper = () => {
    const cssLoader = new Loader<HTMLLinkElement>();
    const jsLoader = new Loader<HTMLScriptElement>();

    cssLoader
      .load(swiperLibrary.css, "swiper-css", "link")
      .then((cssElm: HTMLLinkElement) => {
        cssElm &&
          jsLoader
            .load(swiperLibrary.js, "swiper-js", "script")
            .then((jsElm) => {
              jsElm && console.log("Swiper library loaded...!");
              jsElm && this.carouselComponent.reactive();
            });
      });
  };

  getHtml = () => {
    const htmlString: string = `
      <div class="main-component" >
        <div class="component-wrap" >
          <div class="heading" >
            <h1>Explore Graber’s Wide Range of Products</h1>
          </div>
          <div class="category-buttons" >
            <div class="buttons-container" >
              <button id="shades" class="active" >Shades</button>
              <button id="blinds" >Blinds</button>
              <button id="shutters" >Shutters</button>
              <button id="drapery" >Drapery</button>
            </div>
          </div>
          <div class="description" >
            <p>Graber shades blend form and function to increase comfort and convenience for every home. Choose from a wide selection of designs that offer privacy, precise light control, easy operation, and protection from excess heat, glare, and UV rays—in on-trend colors and materials.</p>
          </div>
          ${this.carouselComponent.getHtml("shade")}
        </div>
      </div>
    `;
    return htmlString.trim();
  };

  init = (): void => {
    const homePageCarousel: null | HTMLDivElement = document.querySelector(
      selectors.homePageCarousel
    );

    if (!homePageCarousel) {
      return;
    }

    homePageCarousel.insertAdjacentHTML("beforeend", this.getHtml());
    this.loadSwiper();
  };
}
