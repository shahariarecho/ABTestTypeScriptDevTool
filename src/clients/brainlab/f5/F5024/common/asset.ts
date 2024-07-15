export const selectors = {
  heroSection: "div.c01.aem-GridColumn.aem-GridColumn--default--12",
  fromNthRow: "form.mktoForm>div:nth-child",
  nameEmailPhoneError:
    "form.mktoForm>div:nth-child(3) div.mktoError, form.mktoForm>div:nth-child(2) div.mktoError",
};

export const scriptLink: string =
  "https://interact.f5.com/js/forms2/js/forms2.min.js";

export const mktoForms2 = {
  domain: "https://interact.f5.com",
  munchkinId: "653-SMC-783",
  formId: 23747,
};

export const mboxNames = {
  tenPercentScroll: "10-percent-scroll",
  twentyPercentScroll: "20-percent-scroll",
  formSubmittedSuccessfully: "form-submitted-successfully",
};

export const formSteps = [
  {
    progressIcon: `
    <svg width="357" height="8" viewBox="0 0 357 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 2.81967C0 1.26241 1.26241 0 2.81967 0H178.5V7.31203H2.81967C1.26241 7.31203 0 6.04962 0 4.49236V2.81967Z" fill="#138A3B"/>
      <path d="M178.676 0.17623H354.18C355.64 0.17623 356.824 1.35974 356.824 2.81967V4.49236C356.824 5.95229 355.64 7.1358 354.18 7.1358H178.676V0.17623Z" stroke="#138A3B" stroke-width="0.352459"/>
    </svg>
    `,
    text: "Step 1 of 2",
  },
  {
    progressIcon: `
    <svg width="358" height="8" viewBox="0 0 358 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.84375 2.81967C0.84375 1.53855 1.8823 0.5 3.16342 0.5H178.344V6.81203H3.16342C1.8823 6.81203 0.84375 5.77348 0.84375 4.49236V2.81967Z" stroke="#138A3B"/>
      <path d="M179.02 0.17623H354.524C355.984 0.17623 357.168 1.35974 357.168 2.81967V4.49236C357.168 5.95229 355.984 7.1358 354.524 7.1358H179.02V0.17623Z" fill="#138A3B"/>
      <path d="M179.02 0.17623H354.524C355.984 0.17623 357.168 1.35974 357.168 2.81967V4.49236C357.168 5.95229 355.984 7.1358 354.524 7.1358H179.02V0.17623Z" stroke="#138A3B" stroke-width="0.352459"/>
    </svg>
    `,
    text: "Step 2 of 2",
  },
];
