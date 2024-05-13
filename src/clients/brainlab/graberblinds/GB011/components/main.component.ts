import { Initializer } from "../../../../../utilities/initializer";
import { studioModels } from "../common/asset";
import { StudioModel } from "../common/studio.mode";
import { TestInfo } from "../common/test.info";
import { StudioComponent } from "./studio.component";

export class MainComponent {
  studioComponent: StudioComponent = new StudioComponent();
  variation: string = TestInfo.VARIATION.toString();
  round: number = 2;
  id: string = "anc";

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const studioModel: StudioModel | undefined = studioModels.find(
      (s: StudioModel) =>
        s.round === this.round &&
        s.id === this.id &&
        s.variation === this.variation
    );

    if (!studioModel) {
      return;
    }

    this.studioComponent.render(studioModel);
  };
}