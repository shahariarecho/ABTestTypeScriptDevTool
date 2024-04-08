import { Initializer } from "../../../../../utilities/initializer";
import {
  getNthBigHeadingSelector,
  getNthSubHeadingSelector,
} from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const subHeadingSelector: string = getNthSubHeadingSelector("3");

    const subHeadings: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(subHeadingSelector);

    if (!subHeadings || subHeadings.length === 0) {
      return;
    }

    subHeadings.forEach((subHeading: HTMLDivElement) => {
      subHeading.addEventListener("click", () => {
        console.log("HI");
        subHeading.nextElementSibling &&
          subHeading.nextElementSibling.classList.toggle("show");
      });
    });

    const bigHeadingSelector: string = getNthBigHeadingSelector("3");
    console.log("big-heading=", bigHeadingSelector);

    const bigHeading: null | HTMLDivElement =
      document.querySelector(bigHeadingSelector);

    bigHeading &&
      bigHeading.addEventListener("click", () => {
        console.log("big-heading=", bigHeading);
      });
  };
}
