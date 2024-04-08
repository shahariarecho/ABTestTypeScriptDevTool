import { findMoreReportLink, selectors } from "../common/asset";

export class JumpComponent {
  private getHtml = (): string => {
    const htmlString: string = `
      <div class="jump-component" >
        <div class="component-wrap" >
          <div class="heading" >
            <h3>Find top industry insights with F5</h3>
          </div>
          <div class="action" >
            <a class="form" href="#newForm" >Get the report</a>
            <a class="report" href="${findMoreReportLink}" >Find more reports</a>
          <div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };

  render = () => {
    const footer: null | HTMLDivElement = document.querySelector(
      selectors.footer
    );
    if (!footer) {
      return;
    }

    footer.insertAdjacentHTML("beforebegin", this.getHtml());
  };
}
