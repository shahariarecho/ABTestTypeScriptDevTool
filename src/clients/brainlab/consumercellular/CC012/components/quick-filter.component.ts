import { triggerMetrics } from "../../CC009/common/utils";
import {
  getSpecificFilterMenuHierarchy,
  mboxNames,
  quickFilters,
  selectors,
} from "../common/asset";
import { QuickFilterModel } from "../models/quick-filter-model";

export class QuickFilterComponent {
  getQuickFilterItemHtml = (quickFilterModel: QuickFilterModel): string => {
    const htmlString: string = `
      <div class="filer-menu" >
        <div class="" id="${quickFilterModel.id}" >${quickFilterModel.label}</div>
      </div
    `;
    return htmlString.trim();
  };

  getHtml = (): string => {
    const htmlString: string = `
      <div class="quick-filer-component" >
        ${quickFilters.map((quickFilterModel: QuickFilterModel) =>
          this.getQuickFilterItemHtml(quickFilterModel)
        )}.join("\n")}
      <div>
    `;

    return htmlString.trim();
  };

  render = () => {
    const gridContainer: HTMLDivElement | null = document.querySelector(
      selectors.shoppingHeader
    );
    if (!gridContainer) {
      return;
    }

    gridContainer.insertAdjacentHTML("afterend", this.getHtml());

    this.makeReactive();
  };

  makeReactive = () => {
    const buttons: null | NodeListOf<HTMLButtonElement> =
      document.querySelectorAll("div.quick-filer-component>div.filer-menu>div");

    if (!buttons || buttons.length === 0) {
      return;
    }

    buttons.forEach((button: HTMLButtonElement) => {
      const id: string | null = button.getAttribute("id");
      this.addListenerToExistFilter(id, button);

      button.addEventListener("click", () => {
        this.filter(id);
        button.classList.toggle("active");
        triggerMetrics(mboxNames.filterCtaClick);
      });
    });
  };

  addListenerToExistFilter = (id: string | null, button: HTMLButtonElement) => {
    const filterMenu: null | HTMLDivElement = document.querySelector(
      selectors.filterMenu
    );

    const existFilter = this.findExistFilter(id);
    existFilter &&
      existFilter.addEventListener("click", () => {
        filterMenu &&
          !filterMenu.getAttribute("style") &&
          button.classList.toggle("active");
      });
  };

  findExistFilter = (id: string | null): HTMLDivElement | null => {
    if (!id) {
      return null;
    }

    const quickFilterModelId = Number(id);

    const quickFilterModel: QuickFilterModel | undefined = quickFilters.find(
      (model: QuickFilterModel) => model.id === quickFilterModelId
    );

    if (!quickFilterModel) {
      return null;
    }

    const existFilterSelector: string = getSpecificFilterMenuHierarchy(
      quickFilterModel.parentPosition,
      quickFilterModel.childPosition
    );

    return document.querySelector(existFilterSelector);
  };

  filter = (id: string | null) => {
    const existFilter = this.findExistFilter(id);
    existFilter && existFilter.click();
  };
}
