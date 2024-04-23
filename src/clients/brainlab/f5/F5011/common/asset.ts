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

export const swiperLibrary = {
  js: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
  css: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
};

export const leftArrowSvg: string = `
<svg width="24" height="41" viewBox="0 0 24 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.665 4L4 20.665L20.665 37.33" stroke="#CCCCCC" stroke-width="6.24907" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export const rightArrowSvg: string = `
<svg width="24" height="41" viewBox="0 0 24 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.00004 37.33L20.665 20.665L4.00004 3.99996" stroke="#CCCCCC" stroke-width="6.24907" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
