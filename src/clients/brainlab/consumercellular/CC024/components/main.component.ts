import { Initializer } from "../../../../../utilities/initializer";
import { selectors, triggerMetrics } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";

export class MainComponent {
  isElementFound: boolean = false;

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    LocationObserver.listen((location: string) => {
      this.isElementFound = false;
    });

    const testObserver = new TestObserver("body");
    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;

        if (
          target.innerHTML &&
          target.innerHTML.length > 270000 &&
          !this.isElementFound
        ) {
          this.addListener();
          this.isElementFound = true;
        }
      }
    };

    testObserver.observe(callback);
  };

  addListener = () => {
    const ownDevice: HTMLDivElement | null = document.querySelector(
      selectors.ownDevice
    );

    console.log("ownDevice=", ownDevice);

    if (!ownDevice) {
      return;
    }

    ownDevice.addEventListener("click", () => {
      triggerMetrics("bring-your-own-device-click");
    });
  };
}
