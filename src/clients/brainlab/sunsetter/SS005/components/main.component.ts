import { Initializer } from "../../../../../utilities/initializer";
import { selectors, triggerEvent } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { OptionComponent } from "./option.component";

export class MainComponent {
  optionComponent: OptionComponent = new OptionComponent();
  variation: string = TestInfo.VARIATION.toString();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const defaultCheckboxLabels: null | NodeListOf<HTMLHeadingElement> =
      document.querySelectorAll(selectors.defaultCheckboxLabels);
    const defaultCheckboxes: null | NodeListOf<HTMLHeadingElement> =
      document.querySelectorAll(selectors.defaultCheckboxes);

    if (this.variation === "0") {
      this.addControlEvent(defaultCheckboxes);
      return;
    }

    if (!defaultCheckboxes || defaultCheckboxes.length === 0) {
      return;
    }

    this.optionComponent.render(defaultCheckboxLabels);
  };

  addControlEvent = (elms: NodeListOf<HTMLElement>) => {
    elms.forEach((checkbox: HTMLElement, index: number) => {
      checkbox.addEventListener("click", () => {
        triggerEvent("checkbox-option-clicked");
      });
    });
  };
}
