import { selectors } from "../common/asset";

export class ButtonComponent {
  getHtml = (): string => {
    const htmlString: string = `
      <button type="button" class="mktoButton" >Next</button>
    `;

    return htmlString.trim();
  };

  render = (formTopDivisions: NodeListOf<HTMLDivElement>, goNext: Function) => {
    const submitButton: null | HTMLButtonElement = document.querySelector(
      selectors.submitButton
    );

    if (!submitButton) {
      return;
    }

    submitButton.classList.add("hide");

    submitButton.insertAdjacentHTML("afterend", this.getHtml());

    submitButton.nextElementSibling &&
      submitButton.nextElementSibling.addEventListener("click", () => {
        submitButton.click();
        this.isFormTopValidated(formTopDivisions) && goNext();
      });
  };

  isFormTopValidated = (
    formTopDivisions: NodeListOf<HTMLDivElement>
  ): boolean => {
    let isFormValidate: boolean = true;

    for (let i = 0; i < formTopDivisions.length; i++) {
      const div = formTopDivisions[i];

      const inputs: NodeListOf<HTMLInputElement> | null =
        div.querySelectorAll("input");

      for (let j = 0; j < inputs.length; j++) {
        const input = inputs[j];
        if (!input.value) {
          isFormValidate = false;
          break;
        }

        if (
          input.nextElementSibling &&
          input.nextElementSibling.classList.contains("mktoError")
        ) {
          isFormValidate = false;
          break;
        }
      }
    }

    return isFormValidate;
  };
}
