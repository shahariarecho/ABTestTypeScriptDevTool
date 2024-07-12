import { Initializer } from "../../../../../utilities/initializer";
import { promoCode, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  getHtml = (uniqueClass: string): string => {
    const htmlString: string = `
      <div class="promo-code-banner ${uniqueClass}" >
        <p>PROMO CODE: <strong>${promoCode}</strong> FOR FREE GROUND SHIPPING OVER $149</p>
      </div>
    `;

    return htmlString.trim();
  };

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    if (window.location.pathname !== "/shoppingcart/") {
      return;
    }

    const checkoutButton: null | HTMLButtonElement = document.querySelector(
      selectors.checkoutButton
    );

    checkoutButton &&
      checkoutButton.insertAdjacentHTML(
        "beforebegin",
        this.getHtml("checkout")
      );

    const paymentForm: null | HTMLButtonElement = document.querySelector(
      selectors.paymentForm
    );

    paymentForm &&
      paymentForm.insertAdjacentHTML("beforebegin", this.getHtml("payment"));
  };
}
