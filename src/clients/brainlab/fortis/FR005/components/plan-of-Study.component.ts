import {
  buttonTexts,
  mboxNames,
  planOfStudyData,
  tableRowHideBreakPoint,
} from "../common/asset";
import { TestInfo } from "../common/test.info";
import { replaceStringSpace, triggerMetrics } from "../common/utils";
import { CourseItem } from "./course-item.component";
import { IndicatorComponent } from "./indicator.component";
import { MobilePlanOfStudyComponent } from "./mobile-plan-of-study.component";
import { TItleComponent } from "./title.component";

export class PlanOfStudyComponent {
  tabFooter: string = "tab-footer";
  tabTable: string = "tab-table";
  tabHeader: string = "tab-header";
  active: string = "active";
  variation: string = TestInfo.VARIATION.toString();

  mobilePlanOfStudyComponent: MobilePlanOfStudyComponent =
    new MobilePlanOfStudyComponent();

  getHtml = (): string => {
    const htmlString: string = `
      <div class="plan-of-study-component" >
        <div class="component-container" >
          ${TItleComponent.render(planOfStudyData.title)}
          <div class="desktop-component-details" >
            <div class="${this.tabHeader} ${this.variation}" >
              <button class="adn-tab-button active" >${
                planOfStudyData.adn.title
              }</button>
              <button class="lpn-tab-button" >${
                planOfStudyData.lpn.title
              }</button>
            </div>
            <div class="${this.tabTable} adn-tab-table ${this.active}" >
              <table>
                <thead>
                  <tr>
                    <th>Course Code</th>
                    <th>Course Title</th>
                    <th>Clock Hours</th>
                    <th>Credit Hours</th>
                  </tr>
                </thead>
                <tbody>
                ${planOfStudyData.adn.courses
                  .map((course, index) => {
                    const needToHide: boolean =
                      index > tableRowHideBreakPoint ?? false;
                    return CourseItem.getHtml(course, needToHide);
                  })
                  .join("\n")}
                </tbody>
              </table>
              <div class="table-footer" >
                ${IndicatorComponent.getHtml(planOfStudyData.adn.indicators)}
                <div class="schedule" >
                  <p>${planOfStudyData.adn.Schedule}</p>
                </div>
              </div>
            </div>
            <div class="${this.tabTable} lpn-tab-table" >
              <table>
                <thead>
                  <tr>
                    <th>Course Code</th>
                    <th>Course Title</th>
                    <th>Clock Hours</th>
                    <th>Credit Hours</th>
                  </tr>
                </thead>
                <tbody>
                ${planOfStudyData.lpn.courses
                  .map((course, index) => {
                    const needToHide: boolean =
                      index > tableRowHideBreakPoint ?? false;
                    return CourseItem.getHtml(course, needToHide);
                  })
                  .join("\n")}
                </tbody>
              </table>
              <div class="table-footer" >
                ${IndicatorComponent.getHtml(planOfStudyData.lpn.indicators)}
                <div class="schedule" >
                  <p>${planOfStudyData.adn.Schedule}</p>
                </div>
              </div>
            </div>
            <div class="${this.tabFooter}" >
              <p>See More Courses</p>
            </div>
          </div>
          ${this.mobilePlanOfStudyComponent.getHtml()}
        </div>
      </div>    
    `;

    return htmlString.trim();
  };

  manageTabFooterText = (tabFooter: HTMLDivElement) => {
    const tabFooterText: null | HTMLParagraphElement =
      tabFooter.querySelector("p");

    if (!tabFooterText || !tabFooterText.textContent) {
      return;
    }

    if (
      replaceStringSpace(tabFooterText.textContent, "-") ===
      replaceStringSpace(buttonTexts.seeMoreText, "-")
    ) {
      tabFooterText.textContent = buttonTexts.seeLessText;
      triggerMetrics(mboxNames.seeMore);
    } else {
      tabFooterText.textContent = buttonTexts.seeMoreText;
      triggerMetrics(mboxNames.seeLess);
    }

    tabFooterText;
  };

  manageSeeMoreView = (tabTable: HTMLDivElement) => {
    const tabFooter: null | HTMLDivElement =
      tabTable.querySelector("div.table-footer");
    tabFooter && tabFooter.classList.toggle("show");

    const hiddenTableRows: null | NodeListOf<HTMLTableRowElement> =
      tabTable.querySelectorAll("tr");

    hiddenTableRows &&
      hiddenTableRows.length > 0 &&
      hiddenTableRows.forEach((tr: HTMLTableRowElement, index: number) => {
        if (index > tableRowHideBreakPoint + 1) {
          tr.classList.toggle("course-hide");
        }
      });
  };

  changeActiveForTable = (
    tabTables: NodeListOf<HTMLDivElement>,
    targetSection: string,
    tableIndex: number
  ) => {
    tabTables.forEach((tabTable: HTMLDivElement, index: number) => {
      if (
        tabTable.classList.contains(this.active) &&
        targetSection === this.tabFooter
      ) {
        this.manageSeeMoreView(tabTable);
      }

      if (targetSection === this.tabTable) {
        tabTable.classList.remove(this.active);
      }

      if (targetSection === this.tabTable && tableIndex === index) {
        tabTable.classList.add(this.active);
      }
    });
  };

  makeReactive = () => {
    const tabFooter: null | HTMLDivElement = document.querySelector(
      "div." + this.tabFooter
    );

    const tabTables: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll("div." + this.tabTable);

    const tabHeaderButtons: null | NodeListOf<HTMLButtonElement> =
      document.querySelectorAll("div." + this.tabHeader + ">button");

    if (
      !tabFooter ||
      !tabTables ||
      tabTables.length === 0 ||
      !tabHeaderButtons ||
      tabHeaderButtons.length === 0
    ) {
      return;
    }

    tabFooter.addEventListener("click", () => {
      this.manageTabFooterText(tabFooter);
      this.changeActiveForTable(tabTables, this.tabFooter, 10);
    });

    tabHeaderButtons.forEach((button: HTMLButtonElement, index: number) => {
      button.addEventListener("click", () => {
        this.mangeTabHeaderButtonActive(tabHeaderButtons, index);
        this.changeActiveForTable(tabTables, this.tabTable, index);
        this.syncFooterCtaText(tabFooter, tabTables);
        console.log("mbox=", mboxNames.tab);
        // @ts-ignore
        adobe.target.trackEvent({ mbox: mboxNames.tab });
      });
    });

    this.mobilePlanOfStudyComponent.makeReactive();
  };

  syncFooterCtaText = (
    tabFooter: HTMLDivElement,
    tabTables: NodeListOf<HTMLDivElement>
  ) => {
    tabTables.forEach((tabTable: HTMLDivElement) => {
      if (tabTable.classList.contains(this.active)) {
        const hiddenTableRow: null | HTMLTableRowElement =
          tabTable.querySelector("tr.course-hide");
        const tabFooterText: null | HTMLParagraphElement =
          tabFooter.querySelector("p");

        if (!hiddenTableRow && tabFooterText && tabFooterText.textContent) {
          tabFooterText.textContent = buttonTexts.seeLessText;
        } else if (
          hiddenTableRow &&
          tabFooterText &&
          tabFooterText.textContent
        ) {
          tabFooterText.textContent = buttonTexts.seeMoreText;
        }
      }
    });
  };

  mangeTabHeaderButtonActive = (
    tabHeaderButtons: NodeListOf<HTMLButtonElement>,
    buttonIndex: number
  ) => {
    tabHeaderButtons.forEach((button: HTMLButtonElement, index: number) => {
      button.classList.remove(this.active);

      if (buttonIndex === index) {
        button.classList.add(this.active);
      }
    });
  };
}
