import {
  leftArrowSvg,
  products,
  rightArrowSvg,
  triggerEvent,
} from "../common/asset";
import { Card } from "../models/card";

export class CarouselComponent {
  static getSwiperSlideHtml = (card: Card, index: number): string => {
    const htmlString: string = `
      <div class="swiper-slide carousel-item-${index}">
        <div class="blind-card" >
          <div class="card-img">
            <img src="${card.imgSrc}" alt="">
          </div>
          <div class="card-content">
            <h2>${card.heading}</h2>
            <p>${card.description}</p>
            <a href="${card.href}" >Take a look</a>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  getHtml = (carousel: string): string => {
    const htmlString: string = `
      <div class="carousel-component ${carousel}" >
        <div class="component-wrap" >
          <div class="container-carousel">
          <div class="swiper carousel">
            <div class="swiper-wrapper">
            ${products.shade
              .map((card: Card, index: number) =>
                CarouselComponent.getSwiperSlideHtml(card, index)
              )
              .join("\n")}
            </div>
          </div>
          <div class="carousel-controller" >
            <div class="carousel-prev">
              <div class="svg" >
                ${leftArrowSvg}
              </div>
            </div>
            <div class="carousel-pagination"></div>
            <div class="carousel-next">
              <div class="svg" >
                ${rightArrowSvg}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  render = () => {
    return this.getHtml();
  };

  reactive = (): any => {
    console.log("Swiper initializing....!");

    // @ts-ignore
    return new Swiper(".carousel", {
      slidesPerView: "auto",
      spaceBetween: 30,
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
      pagination: {
        el: ".carousel-pagination",
        type: "bullets",
        clickable: true,
      },
      on: {
        sliderMove: function () {
          triggerEvent("window-treatments-blinds-carousel-move");
        },
      },
    });
  };
}
