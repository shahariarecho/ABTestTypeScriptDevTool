import { Initializer } from "../../../../../utilities/initializer";
import { selectors, triggerEvent } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  variation: string = TestInfo.VARIATION.toString();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  getLoginLinkHtml = (): string => {
    const linkText: string =
      this.variation === "1"
        ? "Log In"
        : this.variation === "2"
        ? "Sign In"
        : "";
    const htmlString: string = `<a href="" class="login-link" >${linkText}</a>`;
    return htmlString.trim();
  };

  init = (): void => {
    if (window.innerWidth > 1023) {
      return;
    }

    const toggleButton: null | HTMLButtonElement = document.querySelector(
      selectors.toggleButton
    );

    const headerWrapper: null | HTMLButtonElement = document.querySelector(
      selectors.headerWrapper
    );

    if (!toggleButton || !headerWrapper) {
      return;
    }

    toggleButton.classList.add("toggle-btn");
    headerWrapper.classList.add("header-wrapper");

    // headerWrapper.insertAdjacentHTML("afterbegin", this.getLoginLinkHtml());

    toggleButton.addEventListener("click", () => {
      toggleButton.classList.toggle("toggle-btn");
    });

    const loginLink: null | HTMLButtonElement =
      document.querySelector("a.login-link");

    loginLink &&
      loginLink.addEventListener("click", () => {
        triggerEvent("login-link-click");
      });
  };
}
