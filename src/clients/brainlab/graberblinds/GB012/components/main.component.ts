import { Initializer } from "../../../../../utilities/initializer";
import { studioModels } from "../common/asset";
import { StudioModel } from "../common/studio.mode";
import { TestInfo } from "../common/test.info";
import { StudioComponent } from "./studio.component";

export class MainComponent {
  studioComponent: StudioComponent = new StudioComponent();
  variation: string = TestInfo.VARIATION.toString();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const studioModel: StudioModel | undefined = studioModels.find(
      (s: StudioModel) => s.variation === this.variation
    );

    console.log("studio-modal=", studioModel);

    if (!studioModel) {
      return;
    }

    this.studioComponent.render(studioModel);
  };
}
