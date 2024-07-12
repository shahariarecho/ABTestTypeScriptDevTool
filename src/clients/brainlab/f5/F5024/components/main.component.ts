import { Initializer } from "../../../../../utilities/initializer";
import { mboxNames, mktoForms2, scriptLink } from "../common/asset";
import { Loader } from "../common/loader";
import { TestInfo } from "../common/test.info";
import { FormComponent } from "./form.component";

export class MainComponent {
  formComponent: FormComponent = new FormComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    this.formComponent.render();

    const loader = new Loader<HTMLScriptElement>();

    loader
      .load(scriptLink, TestInfo.ID.toString(), "script")
      .then((element) => {
        console.log("Form library loaded....!");

        const form: null | HTMLDivElement = document.querySelector(
          `form#mktoForm_${mktoForms2.formId}`
        );

        console.log("form=", form);

        setTimeout(() => {
          // @ts-ignore
          MktoForms2.loadForm(
            mktoForms2.domain,
            mktoForms2.munchkinId,
            mktoForms2.formId
          ).whenReady((form: any) => {
            console.log("Form loaded....!");
            this.formComponent.configForm();

            form.onSuccess((values: any, followUpUrl: any) => {
              console.log(mboxNames.formSubmittedSuccessfully);
              // show success message
              // @ts-ignore
              adobe.target.trackEvent({
                mbox: mboxNames.formSubmittedSuccessfully,
              });
              return false;
            });
          });
        }, 5000);
      });
  };
}
