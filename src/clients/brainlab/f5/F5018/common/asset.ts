export const selectors = {
  tab: "div.scroll_tab_inner",
  extraTab: "div.scroll_tab_inner>li.tab-extra",
  tabPanel: "div.cmp-tabs",
};

export const tabActiveClasses = ["tab_selected", "cmp-tabs__tab--active"];

export const triggerMetrics = (mboxName: string) => {
  console.log("mbox=", mboxName);
  // @ts-ignore
  adobe && adobe.target && adobe.target.trackEvent({ mbox: mboxName });
};
