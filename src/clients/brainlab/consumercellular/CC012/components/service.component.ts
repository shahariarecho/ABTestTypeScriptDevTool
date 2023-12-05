import {
  getSpecificFilterMenuHierarchy,
  mboxNames,
  quickFilters,
  selectors,
  triggerMetrics,
} from "../common/asset";
import { QuickFilterModel } from "../models/quick-filter-model";

export class ServiceComponent {
  constructor() {}
  addMainFilterMetrics = () => {
    quickFilters.forEach((model: QuickFilterModel) => {
      const existFilterSelector: string = getSpecificFilterMenuHierarchy(
        model.parentPosition,
        model.childPosition
      );

      const existFilterCta: null | HTMLDivElement =
        document.querySelector(existFilterSelector);
      existFilterCta && this.addListener(existFilterCta);
    });
  };

  addListener = (filterCta: HTMLDivElement) => {
    filterCta.addEventListener("click", () => {
      triggerMetrics(mboxNames.filterCtaClick);
    });
  };

  syncActiveFilterWithQuickFilter = () => {
    const activeFilters: null | NodeListOf<HTMLSpanElement> =
      document.querySelectorAll(selectors.activeFilters);

    activeFilters.forEach((span: HTMLSpanElement) => {
      span.textContent &&
        span.textContent.trim().toLowerCase().split(" ").join("-") ===
          "clear-filters" &&
        span.click();

      //span.addEventListener("click", () => {});
    });
  };
}
