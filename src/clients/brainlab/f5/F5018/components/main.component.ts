import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { TabPanelComponent } from "./tab-panel.component";
import { TabComponent } from "./tab.component";

export class MainComponent {
  tabComponent: TabComponent = new TabComponent();
  tabPanelComponent: TabPanelComponent = new TabPanelComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    this.tabPanelComponent.render();

    this.tabComponent.render(() => {
      this.tabPanelComponent.hideOtherPanel();
    });
  };
}
