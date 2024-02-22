import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const dottedLinks: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll(selectors.dottedLink);

    if (dottedLinks.length === 0 || dottedLinks === null) {
      return;
    }

    dottedLinks.forEach((link: HTMLAnchorElement) => {
      const span: null | HTMLSpanElement = link.querySelector("span");
      span && console.log("span=", span.textContent);
      link.textContent = "";
      if (span) {
        link.textContent = span.textContent;
      }
    });
  };
}
