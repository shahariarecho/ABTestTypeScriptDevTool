import {
  buttonTexts,
  mboxNames,
  planOfStudyData,
  tableRowHideBreakPoint,
} from "../common/asset";
import { TestInfo } from "../common/test.info";
import { replaceStringSpace, triggerMetrics } from "../common/utils";
import { AccordionItemComponent } from "./accordion-item.component";

export class MobilePlanOfStudyComponent {
  accordionItemComponent: AccordionItemComponent = new AccordionItemComponent();
  variation: string = TestInfo.VARIATION.toString();

  constructor() {}

  getHtml = () => {
    const htmlString: string = `
      <div class="mobile-component-details" >
        <div class="mobile-tab-header ${this.variation}" >
          <button class="adn-tab-button" >${
            planOfStudyData.adn.shortTitle
          }</button>
          <button class="lpn-tab-button" >${
            planOfStudyData.lpn.shortTitle
          }</button>
        </div>
        <div class="accordion-container" >
          <div class="accordion-wrap" >
            ${planOfStudyData.adn.courses
              .map((course, index) => {
                const needToHide: boolean =
                  index > tableRowHideBreakPoint ?? false;
                return this.accordionItemComponent.getHtml(
                  course,
                  planOfStudyData.adn.indicators,
                  index,
                  needToHide
                );
              })
              .join("\n")}
          </div>
          <div class="accordion-wrap" >
            ${planOfStudyData.lpn.courses
              .map((course, index) => {
                const needToHide: boolean =
                  index > tableRowHideBreakPoint ?? false;
                return this.accordionItemComponent.getHtml(
                  course,
                  planOfStudyData.adn.indicators,
                  index,
                  needToHide
                );
              })
              .join("\n")}
          </div>
        </div>
        <div class="mobile-tab-footer" >
          <p>See More Courses</p>
        </div>
      </div>
    `;
    return htmlString.trim();
  };

  makeReactive = () => {
    this.accordionItemComponent.makeReactive();

    const mobileTabHeader: null | HTMLDivElement = document.querySelector(
      "div.mobile-tab-header"
    );

    const mobileTabFooter: null | HTMLParagraphElement = document.querySelector(
      "div.mobile-tab-footer>p"
    );

    const accordionContainer: null | HTMLDivElement = document.querySelector(
      "div.accordion-container"
    );

    const tabButtons: null | NodeListOf<HTMLButtonElement> =
      document.querySelectorAll("div.mobile-tab-header>button");

    if (
      !mobileTabHeader ||
      !tabButtons ||
      tabButtons.length === 0 ||
      !accordionContainer ||
      !mobileTabFooter
    ) {
      return;
    }

    tabButtons.forEach((button: HTMLButtonElement) => {
      button.addEventListener("click", () => {
        mobileTabHeader.classList.toggle("switch");
        accordionContainer.classList.toggle("switch");
        console.log("mbox=", mboxNames.tab);
        // @ts-ignore
        adobe.target.trackEvent({ mbox: mboxNames.tab });
      });
    });

    mobileTabFooter.addEventListener("click", () => {
      if (!mobileTabFooter.textContent) {
        return;
      }

      if (
        replaceStringSpace(mobileTabFooter.textContent, "-") ===
        replaceStringSpace(buttonTexts.seeMoreText, "-")
      ) {
        mobileTabFooter.textContent = buttonTexts.seeLessText;
        triggerMetrics(mboxNames.seeMore);
      } else {
        mobileTabFooter.textContent = buttonTexts.seeMoreText;
        triggerMetrics(mboxNames.seeLess);
      }

      accordionContainer.classList.toggle("show");
    });
  };
}
