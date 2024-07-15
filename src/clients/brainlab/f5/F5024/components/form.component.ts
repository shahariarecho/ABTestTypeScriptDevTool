import { formSteps, mktoForms2, selectors } from "../common/asset";

export class FormComponent {
  getFormProgressHtml = (step: any, index: number): string => {
    const htmlString: string = `
      <div class="form-progress" >
        <div class="progress-text" >
          <p>${step.text}</p>
        </div>
        <div class="progress-bar" >
          ${step.progressIcon}
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  getHtml = (): string => {
    const htmlString: string = `
      <div class="form-component" >
        <div class="component-wrap" >
          <div class="form-success" >
            <p>Form submitted successfully!</p>
          </div>
          <div class="form-container" >
            <div class="form-header" >
              <div class="form-title" >
                <h3>Secure Your API Today</h3>
              </div>
              <div class="form-progress-container">
                ${formSteps
                  .map((step: any, index: number) =>
                    this.getFormProgressHtml(step, index)
                  )
                  .join("\n")}
              </div>
            </div>
            <form id="mktoForm_${mktoForms2.formId}"></form>
            <div class="form-footer" >
              <div class="disclaimer" >
                <p>The information you provide will be treated in accordance with the F5 <a href="#" >Privacy Notice.</a></p>
              </div>
              <div class="from-actions" >
                <div class="action-right" >
                  <button class="back" >Back</button>
                </div>
                <div class="action-left" >
                  <button class="next" >Next</button>
                  <button class="submit" >Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return htmlString;
  };

  render = () => {
    const heroSection: null | HTMLDivElement = document.querySelector(
      selectors.heroSection
    );

    if (!heroSection) {
      return;
    }

    heroSection.insertAdjacentHTML("beforeend", this.getHtml());
  };

  configForm = () => {
    const emailAndForm: null | HTMLDivElement = document.querySelector(
      selectors.fromNthRow + "(3)"
    );

    const job: null | HTMLDivElement = document.querySelector(
      selectors.fromNthRow + "(4)"
    );

    const companyAndLocation: null | HTMLDivElement = document.querySelector(
      selectors.fromNthRow + "(5)"
    );

    emailAndForm && emailAndForm.classList.add("row-to-col");
    job && job.classList.add("hide");
    companyAndLocation && companyAndLocation.classList.add("hide");

    this.configFormActions();
  };

  configFormActions = () => {
    const nextButton: HTMLButtonElement | null =
      document.querySelector("button.next");
    const backButton: HTMLButtonElement | null =
      document.querySelector("button.back");
    const submitButton: HTMLButtonElement | null =
      document.querySelector("button.submit");
    const formProgressContainer: null | HTMLDivElement = document.querySelector(
      "div.form-progress-container"
    );
    const formActions: null | HTMLDivElement =
      document.querySelector("div.from-actions");

    const originalSubmitButton: null | HTMLButtonElement =
      document.querySelector("button.mktoButton");

    const form: null | HTMLFormElement = document.querySelector(
      "div.form-container>form"
    );

    if (
      !nextButton ||
      !backButton ||
      !submitButton ||
      !formActions ||
      !formProgressContainer ||
      !originalSubmitButton ||
      !form
    ) {
      return;
    }

    nextButton.addEventListener("click", () => {
      originalSubmitButton.click();

      setTimeout(() => {
        const errors: NodeListOf<HTMLDivElement> | null =
          document.querySelectorAll(selectors.nameEmailPhoneError);
        console.log("error=", errors);

        if (errors.length === 0) {
          formProgressContainer.classList.add("next");
          formActions.classList.add("next");
          form.classList.add("next");
        }
      }, 100);
    });

    backButton.addEventListener("click", () => {
      formProgressContainer.classList.remove("next");
      formActions.classList.remove("next");
      form.classList.remove("next");
    });

    submitButton.addEventListener("click", () => {
      originalSubmitButton.click();

      setTimeout(() => {
        const errors: NodeListOf<HTMLDivElement> | null =
          document.querySelectorAll(selectors.nameEmailPhoneError);
        console.log("error=", errors);

        if (errors.length !== 0) {
          formProgressContainer.classList.remove("next");
          formActions.classList.remove("next");
          form.classList.remove("next");
        }
      }, 100);
    });
  };
}
