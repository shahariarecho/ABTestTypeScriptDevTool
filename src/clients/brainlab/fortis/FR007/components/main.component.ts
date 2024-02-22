import { Initializer } from "../../../../../utilities/initializer";
import { getImageUrl, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  variation: string = TestInfo.VARIATION.toString();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const images: null | NodeListOf<HTMLImageElement> =
      document.querySelectorAll(selectors.images);

    if (images === null || images.length === 0) {
      return;
    }

    images.forEach((img: HTMLImageElement, index: number) => {
      img.setAttribute("src", "");
      img.setAttribute("src", getImageUrl(this.variation, index + 1));
    });
  };
}
