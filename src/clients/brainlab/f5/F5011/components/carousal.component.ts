import { leftArrowSvg, rightArrowSvg, selectors } from "../common/asset";
import { Review } from "../models/review";

export class CarouselComponent {
  private getSwiperSlideHtml = (review: Review): string => {
    const htmlString: string = `
      <div class="review-item" >
        <div class="review-item-wrap" >
          <div class="date-and-star" >
            <div class="star" >
              <div class="start-icons" >
                ${review.startHtml}
              </div>
              <div class="incentivized" >
                ${review.incentivized}
              </div>
            </div>
            <div class="date" >
              <span>${review.date}<span>
            </div>
          </div>
          <div class="title" >
            <h4>${review.title}</h4>
          </div>
          <div class="teaser" >
            <p>${review.teaser}</p>
          </div>
          <div class="full-reive-link" >
            <a href="${review.allReviewLink}" >Read full review</a>
          </div>
          <div class="reviewer-details" >
            <div class="author" >
              <h5>${review.author}</h5>
            </div>
            <div class="job-description" >
              <p>${review.jobDescription}</p>
            </div>
            ${review.companyDescriptions
              .map(
                (description: string) =>
                  `<div class="company-description" ><p>${description}</p></div>`
              )
              .join("\n")}
          </div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };

  private getHtml = (reviews: Review[]): string => {
    const htmlString: string = `
      <div class="carousal-component">
        <div class="component-wrap" >
          <div class="headline" >
            <h3>Reviews</h3>
          </div>
          <div class="swiper carousel">
            <div class="swiper-wrapper">
              ${reviews
                .map((review: Review) => this.getSwiperSlideHtml(review))
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

  render = (reviews: Review[]) => {
    const footer: null | HTMLDivElement = document.querySelector(
      selectors.footer
    );

    if (!footer) {
      return;
    }

    footer.insertAdjacentHTML("beforebegin", this.getHtml(reviews));
  };
}
