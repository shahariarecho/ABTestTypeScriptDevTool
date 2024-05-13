import { Initializer } from "../../../../../utilities/initializer";
import { selectors, studioModels } from "../common/asset";
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
    this.addOnRadiusSelectExpertSearch();
    this.addDivider();
  };

  addDivider = () => {
    const mapWrapper: null | HTMLDivElement = document.querySelector(
      selectors.mapWrapper
    );

    if (!mapWrapper) {
      return;
    }

    mapWrapper.insertAdjacentHTML(
      "beforebegin",
      `<div class="form-and-map-divider" ></div>`
    );
  };

  addOnRadiusSelectExpertSearch = () => {
    const radiusInput: null | HTMLSelectElement = document.querySelector(
      selectors.radiusInput
    );

    const addressInput: null | HTMLInputElement = document.querySelector(
      selectors.addressInput
    );

    const searchExpertInput: null | HTMLInputElement = document.querySelector(
      selectors.searchExpertInput
    );

    if (!radiusInput || !addressInput || !searchExpertInput) {
      return;
    }

    radiusInput.addEventListener("input", () => {
      if (radiusInput.value && addressInput.value) {
        searchExpertInput.click();
      }
    });
  };
}
