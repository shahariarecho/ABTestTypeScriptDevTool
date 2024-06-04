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
      promoCode && this.findPromoCodeInput(promoCode);
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

  submitPromoCode = (promoCode: string) => {
    const promoCodeInputs: null | NodeListOf<HTMLInputElement> =
      document.querySelectorAll(selectors.promoCodeInput);

    const promoCodeSubmits: null | NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(selectors.promoCodeSubmit);

    if (
      !promoCodeInputs ||
      promoCodeInputs.length === 0 ||
      !promoCodeSubmits ||
      promoCodeSubmits.length === 0
    ) {
      return;
    }

    console.log("Promo code input and submit button found....!");

    promoCodeInputs.forEach((input: HTMLInputElement) => {
      input.removeAttribute("disabled");
      input.value = promoCode;
    });

    if (isMobile()) {
      promoCodeInputs[0].removeAttribute("disabled");
      promoCodeInputs[0].value = promoCode;

      promoCodeSubmits[0].removeAttribute("disabled");
      promoCodeSubmits[0].click();
      return;
    }

    promoCodeInputs[1].removeAttribute("disabled");
    promoCodeInputs[1].value = promoCode;
    promoCodeInputs[1].focus();

    promoCodeSubmits[1].removeAttribute("disabled");
    promoCodeSubmits[1].click();
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
