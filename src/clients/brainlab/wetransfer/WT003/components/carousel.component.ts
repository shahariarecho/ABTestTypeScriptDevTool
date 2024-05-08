import { rightArrowSvg, selectors, triggerEvent } from "../common/asset";

export class CarouselComponent {
  paginationLastChild: null | HTMLSpanElement = null;
  carouselController: null | HTMLDivElement = null;
  isPaginationLastChildFound: boolean = false;

  private getHtml = (carouselItems: string[]): string => {
    const htmlString: string = `
      <div class="carousal-component">
        <div class="component-wrap" >
          <div class="swiper carousel">
            <div class="swiper-wrapper">
              ${carouselItems.map((item: string) => item).join("\n")}
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="carousel-controller" >
          <div class="controller-wrap" >
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

  render = (carouselItems: string[]) => {
    const mediaSection = document.querySelector(selectors.mediaSection);

    if (mediaSection === null) {
      return;
    }

    mediaSection.insertAdjacentHTML("beforebegin", this.getHtml(carouselItems));
    this.initSwiper();
    this.addGoals();
  };

  addGoals = () => {
    const learnMoreLinks: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll("div.carousal-component a");

    if (!learnMoreLinks || learnMoreLinks.length === 0) {
      return;
    }

    console.log("learnMoreLinks!", learnMoreLinks);

    learnMoreLinks.forEach((link: HTMLAnchorElement, index: number) => {
      link.addEventListener("click", () => {
        triggerEvent(`learn-more-${index + 1}-cta-click`);
      });
    });
  };

  initSwiper = () => {
    // @ts-ignore
    if (typeof Swiper === "function") {
      const swiper: any = this.activeSwiper();
    } else {
      setTimeout(() => {
        this.initSwiper();
      }, 250);
    }
  };

  activeSwiper = (): any => {
    console.log("Swiper object initialized......!");

    // @ts-ignore
    return new Swiper(".carousel", {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".carousel-next",
      },
      on: {
        slideChange: () => {
          this.findPaginationLastChild();

          this.isPaginationLastChildFound &&
            this.paginationLastChild &&
            this.carouselController &&
            this.hideAndShowArrow(
              this.paginationLastChild,
              this.carouselController
            );

          triggerEvent("carousal-slide-changed");
        },
      },
    });
  };

  findPaginationLastChild = () => {
    if (this.paginationLastChild && this.carouselController) {
      return;
    }

    this.paginationLastChild = document.querySelector(
      "div.swiper-pagination>span:last-child"
    );

    this.carouselController = document.querySelector("div.carousel-controller");

    if (this.paginationLastChild && this.carouselController) {
      this.isPaginationLastChildFound = true;
    }

    console.log("Finding pagination last child ......!");
  };

  hideAndShowArrow = (
    paginationLastChild: HTMLSpanElement,
    carouselController: HTMLDivElement
  ) => {
    if (
      paginationLastChild.classList.contains("swiper-pagination-bullet-active")
    ) {
      carouselController.classList.add("hide");
    } else {
      carouselController.classList.remove("hide");
    }
  };
}
