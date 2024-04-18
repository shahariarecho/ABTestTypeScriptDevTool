import { Initializer } from "../../../../../utilities/initializer";
import { TestInfo } from "../common/test.info";
import { EarnComponent } from "./earn.component";
import { HeroComponent } from "./hero/hero.component";
import { OutcomeComponent } from "./outcome/outcome.component";
import { StoryComponent } from "./story.component";

export class MainComponent {
  heroComponent: HeroComponent = new HeroComponent();
  earnComponent: EarnComponent = new EarnComponent();
  outcomeComponent: OutcomeComponent = new OutcomeComponent();
  storyComponent: StoryComponent = new StoryComponent();

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
