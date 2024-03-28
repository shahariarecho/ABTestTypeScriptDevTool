export const selectors = {
  headerWrapper: "div.ui-header__wrapper",
  toggleButton: "button.ui-hamburger-toggle",
  headerLogo: "a.ui-header__logo",
};

export const triggerEvent = (eventName: string) => {
  //@ts-ignore
  window["optimizely"] = window["optimizely"] || [];
  //@ts-ignore
  window["optimizely"].push({
    type: "event",
    eventName: eventName,
  });
};
