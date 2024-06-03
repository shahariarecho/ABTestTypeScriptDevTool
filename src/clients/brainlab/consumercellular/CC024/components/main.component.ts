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
    const body: HTMLBodyElement | null = document.querySelector("body");
    body && this.addOrRemoveByod(body);

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

    this.observeUrlChange();
  };

  addListener = () => {
    const ownDevice: HTMLDivElement | null = document.querySelector(
      selectors.ownDevice
    );

    if (!ownDevice) {
      return;
    }

    ownDevice.addEventListener("click", () => {
      triggerMetrics("bring-your-own-device-click");
    });
  };

  observeUrlChange = () => {
    let oldHref = document.location.href;
    const body = document.querySelector("body");
    const observer = new MutationObserver((mutations) => {
      if (oldHref !== document.location.href) {
        oldHref = document.location.href;
        body && this.addOrRemoveByod(body);
      }
    });
    body && observer.observe(body, { childList: true, subtree: true });
  };

  addOrRemoveByod = (body: HTMLBodyElement) => {
    const filterHref: string = this.filterHref();

    if (filterHref.includes("filters")) {
      body && body.classList.remove("byod");
    } else {
      body && body.classList.add("byod");
    }
  };

  filterHref = (): string => {
    const params = new URLSearchParams(location.search);
    let hrefString: string = window.location.href;

    const values: [string, string][] = Array.from(params);

    values.forEach((val: [string, string]) => {
      if (val[1] === "A") {
        hrefString = hrefString.replace("filters=A", "f=A");
        console.log("hrefString=", hrefString);
      }

      if (val[1] === "p") {
        hrefString = hrefString.replace("filters=p", "f=p");
      }

      if (val[1] === "l") {
        hrefString = hrefString.replace("filters=l", "f=l");
      }

      if (val[1] === "e") {
        hrefString = hrefString.replace("filters=e", "f=e");
      }
    });

    return hrefString;
  };
}
