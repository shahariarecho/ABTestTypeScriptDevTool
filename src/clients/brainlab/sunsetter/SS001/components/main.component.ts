import { Initializer } from "../../../../../utilities/initializer";
import { TestInfo } from "../common/test.info";
import { HeroOverlayComponent } from "./hero-overlay.component";

export class MainComponent {
  heroOverlayComponent: HeroOverlayComponent = new HeroOverlayComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    this.heroOverlayComponent.render();
  };
}
