import { Initializer } from "../../../../../utilities/initializer";
import { storageKey, visitedLocationsStorageKey } from "../common/asset";

import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { PromoPopupComponent } from "./promo-popup.component";

export class MainComponent {
  promoPopupComponent: PromoPopupComponent = new PromoPopupComponent();

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
    });
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
