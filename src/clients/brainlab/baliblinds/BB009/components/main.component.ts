import { Initializer } from "../../../../../utilities/initializer";
import {
  productDescriptions,
  selectors,
  whereToBuyLink,
} from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    this.renderSolarShadeCta();
    this.changeDescriptions();
  };

  getSolarShadeHtml = (): string => {
    const htmlString: string = `
      <div class="shade-cta" >
        <a class="action-link gray" href="/link/37733848985c4e38b03275f19f9bbcb0.aspx">Learn More</a>
        <a class="where-to-buy" href="${whereToBuyLink}">Where to Buy</a>
      </div>
    `;
    return htmlString.trim();
  };

  renderSolarShadeCta = () => {
    const solarShade: HTMLDivElement | null = document.querySelector(
      selectors.solarShade
    );

    if (solarShade === null) {
      return;
    }

    solarShade.insertAdjacentHTML("beforeend", this.getSolarShadeHtml());
  };

  changeDescriptions = () => {
    const descriptions: null | NodeListOf<HTMLParagraphElement> =
      document.querySelectorAll(selectors.descriptions);

    if (descriptions === null || descriptions.length === 0) {
      return;
    }

    descriptions.forEach((description: HTMLParagraphElement, index: number) => {
      description.textContent = "";
      description.textContent = productDescriptions[index];
    });
  };
}
