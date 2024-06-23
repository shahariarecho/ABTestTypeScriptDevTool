import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { HeroComponent } from "./hero.component";
import { NavbarComponent } from "./navbar.component";

export class MainComponent {
  navbarComponent: NavbarComponent = new NavbarComponent();
  heroComponent: HeroComponent = new HeroComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  private getHtml = (): string => {
    const htmlString: string = `
      <div class="main-component" >
        <div class="component-wrap" >
          ${this.navbarComponent.getHtml()}
          ${this.heroComponent.getHtml()}
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  init = (): void => {
    const main: null | Element = document.querySelector(selectors.main);

    if (!main) {
      return;
    }

    main.insertAdjacentHTML("afterend", this.getHtml());
  };
}
