import { QuickFilterModel } from "../models/quick-filter-model";

export const selectors = {
  shoppingPageContainer: "div#shopping-page-container",
  gridContainer: "div.grid-container",
  shoppingHeader: "div.choose-device-wrapper>div:first-child>div",
  activeFilters: "div.active-filters>span",
  filterMenu: "div.filter-buttons>div:first-child>div.filter-menu",
  quickFilterMenus: "div.quick-filer-component>div.filer-menu>div",
  clearFilter: "span.clear-filters",
};

export const pathnames = {
  device: "/shopping/choose/device",
};

export const getSpecificFilterMenuHierarchy = (
  parentPosition: number,
  childPosition: number
): string => {
  return `div.filter-buttons>div.selection-modifier>div.filter-menu>section:nth-child(${parentPosition})>ul>li:nth-child(${childPosition})>div`;
};

export const v1QuickFilters: QuickFilterModel[] = [
  {
    id: 1,
    label: "Apple",
    parentPosition: 1,
    childPosition: 1,
  },
  {
    id: 2,
    label: "Samsung",
    parentPosition: 1,
    childPosition: 5,
  },
  {
    id: 3,
    label: "Flip Phone",
    parentPosition: 2,
    childPosition: 6,
  },
];

export const v2QuickFilters: QuickFilterModel[] = [
  {
    id: 1,
    label: "Apple",
    parentPosition: 1,
    childPosition: 1,
  },
  {
    id: 2,
    label: "Motorola",
    parentPosition: 1,
    childPosition: 3,
  },
  {
    id: 3,
    label: "Samsung",
    parentPosition: 1,
    childPosition: 5,
  },
];

export const controlQuickFilters: QuickFilterModel[] = [
  {
    id: 1,
    label: "Apple",
    parentPosition: 1,
    childPosition: 1,
  },
  {
    id: 2,
    label: "Motorola",
    parentPosition: 1,
    childPosition: 3,
  },
  {
    id: 1,
    label: "Apple",
    parentPosition: 1,
    childPosition: 1,
  },
  {
    id: 2,
    label: "Samsung",
    parentPosition: 1,
    childPosition: 5,
  },
  {
    id: 3,
    label: "Flip Phone",
    parentPosition: 2,
    childPosition: 6,
  },
];

export const mboxNames = {
  devicePageVisit: "device-page-visit",
  filterCtaClick: "filter-cta-click",
  activeFiltersClick: "active-filters-click",
};

export const triggerMetrics = (mboxName: string) => {
  console.log("mbox=", mboxName);
  // @ts-ignore
  adobe.target.trackEvent({ mbox: mboxName });
};

export const maxHtmlLengthToRender: number = 200000;
export const mobileBreakPoint: number = 925;

export const trimText = (text: string): string => {
  return text.trim().toLowerCase().split(" ").join("-");
};
