import { Initializer } from "../../../../../utilities/initializer";
import {
  isMobile,
  selectors,
  storageKey,
  visitedLocationsStorageKey,
} from "../common/asset";

import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";
import { PromoPopupComponent } from "./promo-popup.component";

export class MainComponent {
  promoPopupComponent: PromoPopupComponent = new PromoPopupComponent();
  isPromoInputFound: boolean = false;

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    !sessionStorage.getItem(storageKey) &&
      sessionStorage.setItem(storageKey, "no");
    this.promoPopupComponent.render();

    const offerPopup: null | HTMLDivElement =
      document.querySelector("div.offer-popup");

    LocationObserver.listen((location: string) => {
      location === "/shopping/thankyou" &&
        sessionStorage.setItem(visitedLocationsStorageKey, "");

      const visitedLocationsString: string | null = sessionStorage.getItem(
        visitedLocationsStorageKey
      );

      if (visitedLocationsString) {
        const visitedLocations: string[] = JSON.parse(visitedLocationsString);
        visitedLocations.push(location);
        sessionStorage.setItem(
          visitedLocationsStorageKey,
          JSON.stringify(visitedLocations)
        );
      } else {
        sessionStorage.setItem(
          visitedLocationsStorageKey,
          JSON.stringify([location])
        );
      }

      offerPopup &&
        visitedLocationsString &&
        this.shopPopupAccordingToVisitedLocationHistory(
          visitedLocationsString,
          offerPopup
        );

      this.isPromoInputFound = false;
    });

    this.applyPromoCode();
  };

  applyPromoCode = () => {
    const params = new URLSearchParams(window.location.search);

    if (params.has("promo-code")) {
      const promoCode: string | null = params.get("promo-code");
      console.log("Promo code found....!");
      promoCode && this.submitPromoCode(promoCode);
    }
  };

  findPromoCodeInput = (promoCode: string) => {
    const testObserver = new TestObserver("body");
    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;

        if (target.innerHTML.length > 210000 && !this.isPromoInputFound) {
          this.submitPromoCode(promoCode);
          console.log("Promo code input observing....!");
          this.isPromoInputFound = true;
        }
      }
    };

    testObserver.observe(callback);
  };

  submitPromoCode = async (promoCode: string) => {
    const res = await fetch(
      "https://www.consumercellular.com/shopping/api/basket/ApplyPromoCode/" +
        promoCode,
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          priority: "u=1, i",
          "referrer-policy": "strict-origin-when-cross-origin",
          "sec-ch-ua":
            '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          cookie: document.cookie,
          Referer: window.location.href,
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: null,
        method: "POST",
      }
    );

    console.log("res=", res);
  };

  shopPopupAccordingToVisitedLocationHistory = (
    visitedLocationsString: string,
    offerPopup: HTMLDivElement
  ) => {
    const visitedLocations: string[] = JSON.parse(visitedLocationsString);

    visitedLocations.reverse();

    const checkoutIndex = visitedLocations.findIndex(
      (location: string) => location === "/shopping/checkout"
    );
    checkoutIndex !== -1 && this.promoPopupComponent.showPromoPopup(offerPopup);
  };
}
