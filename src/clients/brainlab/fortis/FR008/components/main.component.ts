import { Initializer } from "../../../../../utilities/initializer";
import { TestInfo } from "../common/test.info";
import { AboutComponent } from "./about.component";
import { DcnComponent } from "./dcn.component";
import { EarnComponent } from "./earn.component";
import { FooterComponent } from "./footer.component";
import { HeroComponent } from "./hero/hero.component";
import { JourneyComponent } from "./journey.component";
import { OutcomeComponent } from "./outcome/outcome.component";
import { StoryComponent } from "./story.component";

export class MainComponent {
  heroComponent: HeroComponent = new HeroComponent();
  earnComponent: EarnComponent = new EarnComponent();
  outcomeComponent: OutcomeComponent = new OutcomeComponent();
  storyComponent: StoryComponent = new StoryComponent();
  dcnComponent: DcnComponent = new DcnComponent();
  journeyComponent: JourneyComponent = new JourneyComponent();
  aboutComponent: AboutComponent = new AboutComponent();
  footerComponent: FooterComponent = new FooterComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  getHtml = (): string => {
    const htmlString: string = `
      <div class="main-component" >
        ${this.heroComponent.getHtml()}
        ${this.earnComponent.getHtml()}
        ${this.outcomeComponent.getHtml()}
        ${this.storyComponent.getHtml()}
        ${this.journeyComponent.getHtml()}
        ${this.dcnComponent.getHtml()}
        ${this.aboutComponent.getHtml()}
        ${this.footerComponent.getHtml()}
      </div>
    `;

    return htmlString.trim();
  };

  init = (): void => {
    this.removeExistElement();

    const body: null | HTMLBodyElement = document.querySelector("body");

    if (!body) {
      return;
    }

    body.insertAdjacentHTML("afterbegin", this.getHtml());
  };

  removeExistElement = () => {
    const root: null | HTMLDivElement = document.querySelector("div#root");
    root && root.remove();
  };
}
