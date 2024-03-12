export const selectors = {
  footer: "div[data-component-title='Footer']",
  success: "div.success-message",
  submitButton: "div#newForm button",
  form: "div#newForm>form",
};

export const mboxNames = {
  formSubmittedSuccessfully: "form-submitted-successfully",
  submitButtonClick: "submit-button-click",
  anywhereClickInForm: "anywhere-click-in-form",
};

export const triggerMetrics = (mboxName: string) => {
  console.log("mbox=", mboxName);
  // @ts-ignore
  adobe && adobe.target && adobe.target.trackEvent({ mbox: mboxName });
};
