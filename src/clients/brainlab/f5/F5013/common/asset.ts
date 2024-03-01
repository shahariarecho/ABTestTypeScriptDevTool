import { Icon } from "../models/icon";

export const selectors = {
  blogContent:
    "div.bg-default>div.c29-columns__container>div.row>div.c29-columns__col--two-wide",
  formComponentContainer: "div.form-component-container",
  modalCloseIcon: "div.form-close-icon",
  signupButton: "button.signup-button",
  successCloseIcon: "div.success-close-icon",
  privacyPolicy:
    "form#mktoForm_22195>div:nth-child(8)  div.mktoHtmlText.mktoHasWidth",
};

export const privacyPolicyLink: string =
  "https://www.f5.com/company/policies/privacy-policy";

export const mktoForms2 = {
  domain: "https://interact.f5.com",
  munchkinId: "653-SMC-783",
  formId: 22195,
};

const icons: Icon[] = [
  {
    svg: "https://medianet.com/cro/f5/f5013/kara-sprague.png",
    text: "Kara Sprague",
    step: 1,
    description: "Executive Vice President and Chief Product Officer",
  },
  {
    svg: "https://medianet.com/cro/f5/f5013/dan-woods.png",
    text: "Dan Woods",
    step: 1,
    description: "Former FBI Special Agent and CIA CyberOps Officer",
  },
  {
    svg: "https://medianet.com/cro/f5/f5013/lori-mac-vittie.png",
    text: "Lori MacVittie",
    step: 2,
    description: "Distinguished Engineer",
  },
];

export const formInfos = {
  title: "Receive exclusive insights from F5 experts",
  closeIcon: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.28045 7.49983L14.8517 1.92898C15.0494 1.73115 15.0494 1.41101 14.8517 1.21325L13.7869 0.14812C13.6921 0.0533558 13.5634 0 13.4291 0C13.2947 0 13.166 0.0533558 13.0712 0.14812L7.50001 5.71939L1.92881 0.14812C1.83398 0.0533558 1.70529 0 1.57094 0C1.43663 0 1.30791 0.0533558 1.21311 0.14812L0.148372 1.21325C-0.0494575 1.41101 -0.0494575 1.73115 0.148372 1.92898L5.71958 7.49986L0.148926 13.0701C-0.0488064 13.2679 -0.0488064 13.588 0.148926 13.7858L1.21373 14.8509C1.30849 14.9457 1.43721 14.999 1.57156 14.999C1.70591 14.999 1.8346 14.9457 1.92946 14.8509L7.49998 9.28029L13.0705 14.8509C13.1654 14.9457 13.294 14.999 13.4284 14.999C13.5628 14.999 13.6915 14.9457 13.7862 14.8509L14.851 13.7858C15.0488 13.588 15.0488 13.2679 14.851 13.0701L9.28045 7.49983Z" fill="#222222"/>
  </svg>
  `,
  icons: icons,
  description:
    "Sign up to receive an email sharing valuable insights from F5 thought leaders including:",
};

export const successText: string =
  "Thanks you for your interest in F5. Look for the latest information in your inbox.";

export const scriptLink: string =
  "https://interact.f5.com/js/forms2/js/forms2.min.js";

export const mboxNames = {
  bottomSignupClick: "bottom-signup-click",
  formSubmittedSuccessfully: "form-submitted-successfully",
};

export const contactUsLink: string = "https://www.f5.com/company/contact";

export const triggerMetrics = (mboxName: string) => {
  // @ts-ignore
  adobe && adobe.target && adobe.target.trackEvent({ mbox: mboxName });
  console.log("mbox=", mboxName);
};
