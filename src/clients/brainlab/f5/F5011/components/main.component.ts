import { Initializer } from "../../../../../utilities/initializer";
import { mboxNames, selectors, triggerMetrics } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { TestObserver } from "../common/test.observer";
import { Loader } from "../loaders/loader";

export class MainComponent {
  scriptLink: string =
    "https://d30ia583fbtg8i.cloudfront.net/trustquotes/trustquotes.js";
  isFormSubmitted: boolean = false;
  variation: string = TestInfo.VARIATION.toString();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  getTrustRadiusHtml = (variation: string): string => {
    const v1HtmlString: string = `
      <div class="trustradius-component">
        <div class="container" >
          <div class="trustradius-tqw" data-trustradius-id="65eb2c450ef0590906e780b0"></div>
        </div>
      </div>
    `;

    const v2HtmlString: string = `
      <div class="trustradius-component">
        <div class="container" >
          <div class="trustradius-tqw" data-trustradius-id="65c0f13fe4798abb8b45d41a"></div>
        </div>
      </div>
    `;
    return variation === "2" ? v1HtmlString.trim() : v2HtmlString.trim();
  };

  init = (): void => {
    this.variation !== "control" && this.loadTrustRadius();
    this.addGoals();
  };

  loadTrustRadius = () => {
    const footer: null | HTMLDivElement = document.querySelector(
      selectors.footer
    );

    if (footer === null) {
      return;
    }

    footer.insertAdjacentHTML(
      "beforebegin",
      this.getTrustRadiusHtml(this.variation)
    );

    const loader = new Loader<HTMLScriptElement>();

    loader
      .load(this.scriptLink, TestInfo.ID.toString(), "script")
      .then((element) => {
        console.log("JS loaded...!", element);
      });
  };

  addGoals = () => {
    const testObserver = new TestObserver(selectors.success);

    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;
        if (target.classList.contains("show") && !this.isFormSubmitted) {
          triggerMetrics(mboxNames.formSubmittedSuccessfully);
          this.isFormSubmitted = true;
        }
      }
    };
    testObserver.observe(callback);

    const form: null | HTMLFormElement = document.querySelector(selectors.form);

    form &&
      form.addEventListener("click", () => {
        triggerMetrics(mboxNames.anywhereClickInForm);
      });

    const submitButton: null | HTMLButtonElement = document.querySelector(
      selectors.submitButton
    );

    submitButton &&
      submitButton.addEventListener("click", () => {
        triggerMetrics(mboxNames.submitButtonClick);
      });
  };
}
