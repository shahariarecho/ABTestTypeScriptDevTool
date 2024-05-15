import { Initializer } from "../../../../../utilities/initializer";
import { TestInfo } from "../common/test.info";
import { PromoPopupComponent } from "./promo-popup.component";

export class MainComponent {
  promoPopupComponent: PromoPopupComponent = new PromoPopupComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    this.promoPopupComponent.render();
  };
}
