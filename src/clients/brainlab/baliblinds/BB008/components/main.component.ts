import { Initializer } from "../../../../../utilities/initializer";
import { TestInfo } from "../common/test.info";
import { ShapeComponent } from "./shape.component";

export class MainComponent {
  shapeComponent: ShapeComponent = new ShapeComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    this.shapeComponent.render();
  };
}
