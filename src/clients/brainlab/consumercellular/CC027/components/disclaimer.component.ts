import { disclaimer } from "../common/asset";

export class DisclaimerComponent {
  private getHtml = (): string => {
    const htmlString: string = `
      <div class="disclaimer-component" >
        <p>${disclaimer}</p>
      </div>
    `;

    return htmlString.trim();
  };

  render = (bodyContent: HTMLDivElement) => {
    bodyContent.insertAdjacentHTML("beforeend", this.getHtml());
  };
}
