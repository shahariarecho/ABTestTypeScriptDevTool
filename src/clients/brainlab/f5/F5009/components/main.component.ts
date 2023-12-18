import { Initializer } from "../../../../../utilities/initializer";
import { privacyNoticeLink, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { ButtonComponent } from "./button.component";
import { ProgressComponent } from "./progress.component";

export class MainComponent {
  buttonComponent: ButtonComponent = new ButtonComponent();
  progressComponent: ProgressComponent = new ProgressComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const formTopDivisions: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.formTopDivisions);

    const formBottomDivisions: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.formBottomDivisions);

    if (!formTopDivisions || !formBottomDivisions) {
      return;
    }

    this.playHideAndShow(formBottomDivisions, "hide");

    this.progressComponent.render();

    this.buttonComponent.render(formTopDivisions, () => {
      this.playHideAndShow(formTopDivisions, "hide");
      this.playHideAndShow(formBottomDivisions, "show");
      this.progressComponent.makeProgressFull();
    });

    this.changeFormText();
  };

  playHideAndShow = (
    divisions: NodeListOf<HTMLDivElement>,
    operation: string
  ) => {
    operation === "hide" &&
      divisions.forEach((div: HTMLDivElement) => {
        div.classList.add("hide");
      });

    operation === "show" &&
      divisions.forEach((div: HTMLDivElement) => {
        div.classList.remove("hide");
      });
  };

  changeFormText = () => {
    const formText: null | HTMLParagraphElement = document.querySelector(
      selectors.formText
    );

    if (!formText) {
      return;
    }

    formText.textContent = "";

    formText.insertAdjacentHTML(
      "beforeend",
      `The information you provide will be treated in accordance with the <a href="${privacyNoticeLink}" >F5 Privacy Notice</a>. Opt-out at anytime.`
    );
  };
}
