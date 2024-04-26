import {
  checkSvgIcon,
  selectors,
  triggerEvent,
  uncheckSvgIcon,
} from "../common/asset";

export class OptionComponent {
  defaultCheckboxLabels: null | NodeListOf<HTMLHeadingElement> = null;

  private getHtml = (): string => {
    const htmlString: string = `
      <div class="option-component" >
        <h3 class="my-2">I'm interested in:</h3>
        <div class="component-wrap" >
          <div class="checkbox unchecked" >
            <div class="checked-icon" >${checkSvgIcon}</div>
            <div class="unchecked-icon" >${uncheckSvgIcon}</div>
            <div class="text" >AWNINGS</div>
          </div>
          <div class="checkbox unchecked" >
            <div class="checked-icon" >${checkSvgIcon}</div>
            <div class="unchecked-icon" >${uncheckSvgIcon}</div>
            <div class="text" >RETRACTABLE SHADES</div>
          </div>
          <div class="checkbox unchecked" >
            <div class="checked-icon" >${checkSvgIcon}</div>
            <div class="unchecked-icon" >${uncheckSvgIcon}</div>
            <div class="text" >EXTERIOR SHADES</div>
          </div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };

  render = (defaultCheckboxLabels: null | NodeListOf<HTMLHeadingElement>) => {
    this.defaultCheckboxLabels = defaultCheckboxLabels;

    const legend: null | HTMLLegendElement = document.querySelector(
      selectors.legend
    );

    if (!legend) {
      return;
    }

    legend.nextElementSibling &&
      legend.nextElementSibling.classList.add("vanish");

    legend.insertAdjacentHTML("afterend", this.getHtml());

    this.active();
  };

  active = () => {
    const checkboxes: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll("div.checkbox");

    if (!checkboxes || checkboxes.length === 0) {
      return;
    }

    checkboxes.forEach((checkbox: HTMLDivElement, index: number) => {
      checkbox.addEventListener("click", () => {
        checkbox.classList.add("checked");
        triggerEvent("checkbox-option-clicked");
        this.defaultCheckboxLabels && this.defaultCheckboxLabels[index].click();
        this.uncheckExceptClicked(checkboxes, index);
      });
    });
  };

  uncheckExceptClicked = (
    checkboxes: NodeListOf<HTMLDivElement>,
    checkedIndex: number
  ) => {
    checkboxes.forEach((checkbox: HTMLDivElement, index: number) => {
      if (index !== checkedIndex) {
        checkbox.classList.remove("checked");
      }
    });
  };
}
