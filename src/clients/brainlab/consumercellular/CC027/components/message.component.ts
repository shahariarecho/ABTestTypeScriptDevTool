import { tradeMessage } from "../common/asset";

export class MessageComponent {
  private getHtml = (): string => {
    const htmlString: string = `
      <div class="message-component" >
        <div class="component-wrap" >
          <p class="free" >${tradeMessage.free}</p>
          <p class="term" >${tradeMessage.term}</p>
          <p class="redeem" >${tradeMessage.redeem}</p>
        </div>
      </div>
    `;
    return htmlString.trim();
  };

  render = (target: Element) => {
    target.insertAdjacentHTML("afterend", this.getHtml());
  };
}
