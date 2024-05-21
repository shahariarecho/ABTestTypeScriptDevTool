import {
  redeemNowLink,
  storageKey,
  visitedLocationsStorageKey,
} from "../common/asset";

export class PromoPopupComponent {
  isPopupDisplayed: boolean = false;

  private getHtml = (): string => {
    const htmlString: string = `
      <div class="offer-popup" >
        <div class="promo-popup-component" >
          <div class="component-wrap" >
            <div class="headline" >
              <h1>Unlock $25 Off</h1>
            </div>
            <div class="sub-title" >
              <h3>REDEEM TODAY, ENTER PROMO CODE</h3>
            </div>
            <div class="title" >
              <h2><span class="highlight-text" >'SAVE25'</span> AT CHECKOUT</h2>
            </div>
            <div class="redeem-now" >
              <a href="${redeemNowLink}" >REDEEM NOW</a>
            </div>
            <div class="skip-offer" >
              <a>SKIP OFFER</a>
            </div>
            <div class="notice" >
              <p>DON'T MISS OUT ON THIS LIMITED TIME OFFER!</p>
            </div>
          </div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };

  render = () => {
    const body: null | HTMLBodyElement = document.querySelector("body");

    if (!body) {
      return;
    }

    body.insertAdjacentHTML("beforeend", this.getHtml());
    this.configure();
  };

  configure = () => {
    const offerPopup: null | HTMLDivElement =
      document.querySelector("div.offer-popup");

    const skipButton: null | HTMLDivElement =
      document.querySelector("div.skip-offer>a");

    if (!offerPopup || !skipButton) {
      return;
    }

    skipButton.addEventListener("click", (e) => {
      offerPopup.classList.remove("show");
    });
  };

  showPromoPopup = (offerPopup: HTMLDivElement) => {
    if (
      !this.isPopupDisplayed &&
      sessionStorage.getItem(storageKey) &&
      sessionStorage.getItem(storageKey) === "no"
    ) {
      offerPopup.classList.add("show");
      this.isPopupDisplayed = true;
      sessionStorage.setItem(storageKey, "yes");
      sessionStorage.setItem(visitedLocationsStorageKey, "");
    }
  };
}
