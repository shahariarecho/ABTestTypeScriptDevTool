import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { AboutComponent } from "./about.component";
import { ContactComponent } from "./contact.component";
import { FeatureComponent } from "./feature.component";
import { HeroComponent } from "./hero.component";
import { NavbarComponent } from "./navbar.component";
import { SuccessStoryComponent } from "./success-story.component";

export class MainComponent {
  navbarComponent: NavbarComponent = new NavbarComponent();
  heroComponent: HeroComponent = new HeroComponent();
  featureComponent: FeatureComponent = new FeatureComponent();
  contactComponent: ContactComponent = new ContactComponent();
  aboutComponent: AboutComponent = new AboutComponent();
  successStoryComponent: SuccessStoryComponent = new SuccessStoryComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  private getHtml = (): string => {
    const htmlString: string = `
      <div class="main-component" >
        <div class="component-wrap" >
          ${this.navbarComponent.getHtml()}
          ${this.heroComponent.getHtml()}
          ${this.featureComponent.getHtml()}
          ${this.contactComponent.getHtml()}
          ${this.aboutComponent.getHtml()}
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
    this.successStoryComponent.render();
  };
}
