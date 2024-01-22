import { mBoxNames, selectors, triggerMetrics } from "../common/asset";

export class PlanService {
  lastCircleIndex: number = 3;

  clickNthDesktopPlanButton = (nth: number) => {
    const buttons: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.desktopPlanButtons);

    if (!buttons || buttons.length === 0) {
      return;
    }

    buttons[nth].click();
  };

  clickNthMobilePlanButton = (nth: number) => {
    const mobilePlanButtons: NodeListOf<HTMLButtonElement> | null =
      document.querySelectorAll(selectors.mobilePlanButtons);

    if (
      !mobilePlanButtons ||
      mobilePlanButtons.length === 0 ||
      !mobilePlanButtons[nth]
    ) {
      return;
    }

    mobilePlanButtons[nth].click();

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 250);
  };

  addPlanButtonsListener = (planButtonsSelected: string) => {
    const buttons: null | NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(planButtonsSelected);
    if (!buttons || buttons.length === 0) {
      return;
    }

    buttons.forEach((button: HTMLButtonElement) => {
      button.addEventListener("click", () => {
        triggerMetrics(mBoxNames.planClick);
      });
    });
  };

  showMobilePlan = (callback: Function) => {
    const circles: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.circles);

    if (!circles || circles.length === 0) {
      return;
    }

    for (let index = 0; index < circles.length; index++) {
      const circle: HTMLDivElement = circles.item(index);

      if (
        circle.classList.contains("circle-selected") &&
        index !== this.lastCircleIndex
      ) {
        circles.item(index + 1).click();
        setTimeout(() => {
          circle.click();
          callback();
        }, 250);
        break;
      } else {
        circles.item(index - 1).click();
        setTimeout(() => {
          circle.click();
          callback();
        }, 250);
        break;
      }
    }
  };
}
