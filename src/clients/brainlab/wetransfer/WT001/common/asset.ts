export const selectors = {
  cookieAcceptBtn: "button#cb-yes",
  cookieRejectBtn: "button#cb-no",
  cookieConfirmSection: "div#cb-gdpr",
};

export const getStartedLink: string =
  "https://wetransfer.com/pricing?trk=file_sharing_header";

export const triggerEvent = (eventName: string) => {
  //@ts-ignore
  window["optimizely"] = window["optimizely"] || [];
  //@ts-ignore
  window["optimizely"].push({
    type: "event",
    eventName: eventName,
  });
};
