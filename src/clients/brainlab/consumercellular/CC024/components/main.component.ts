import { Initializer } from "../../../../../utilities/initializer";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  location: string = "";
  isPageLoaded: boolean = false;

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {};
}
