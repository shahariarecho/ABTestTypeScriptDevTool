import { leftArrowSvg, rightArrowSvg, triggerEvent } from "../common/asset";

export class CarouselComponent {
  getSwiperSlideHtml = (imgLink: string, index: number): string => {
    const className: string = index % 2 === 0 ? "" : "card-blue";

    const htmlString: string = `
      <div class="swiper-slide carousel-item-${index}">
        <div class="image-card ${className}" >
          <img src="${imgLink}" >
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  getHtml = (imgLinks: string[]): string => {
    const htmlString: string = `
      <div class="carousel-component" >
        <div class="component-wrap" >
          <div class="swiper carousel">
            <div class="swiper-wrapper">
            ${imgLinks
              .map((imgLink: string, index: number) =>
                this.getSwiperSlideHtml(imgLink, index)
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
            <div class="carousel-next">
              <div class="svg" >
                ${rightArrowSvg}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  initSwiper = () => {
    // @ts-ignore
    if (typeof Swiper === "function") {
      const swiper: any = this.reactive();
      console.log("Swiper initialize..!");
    } else {
      setTimeout(() => {
        this.initSwiper();
      }, 250);
    }
  };

  reactive = (): any => {
    // @ts-ignore
    return new Swiper(".carousel", {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
      pagination: {
        el: ".carousel-pagination",
      },
      mousewheel: true,
      keyboard: true,
      breakpoints: {
        420: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1066: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
      on: {
        slideChange: function () {
          triggerEvent("review-slide-change");
        },
      },
    });
  };
}
