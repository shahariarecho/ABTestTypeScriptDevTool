export const selectors = {
  ownDevice: "div.grid-container>div:nth-child(2)>div.choose-device",
};

export const triggerMetrics = (mboxName: string) => {
  // @ts-ignore
  adobe && adobe.target && adobe.target.trackEvent({ mbox: mboxName });
  console.log("mbox=", mboxName);
};
