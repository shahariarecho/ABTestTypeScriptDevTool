export const selectors = {
  nthDropdownTarget:
    "div.responsivegrid.aem-GridColumn.aem-GridColumn--default--12>div>div:nth-child",
  headingPostFix: "div.bg-default>div>div.content>div.c29-columns",
};

export const getNthSubHeadingSelector = (nth: string) => {
  return `${selectors.nthDropdownTarget}(${nth})>${selectors.headingPostFix}`;
};

export const getNthBigHeadingSelector = (nth: string) => {
  return `${selectors.nthDropdownTarget}(${nth})>div.bg-default>div>div:first-child>div:first-child`;
};
