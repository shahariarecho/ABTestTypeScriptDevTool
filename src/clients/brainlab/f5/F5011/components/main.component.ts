import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { Loader } from "../loaders/loader";

export class MainComponent {
  scriptLink: string =
    "https://d30ia583fbtg8i.cloudfront.net/trustquotes/trustquotes.js";

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  getTrustRadiusHtml = (): string => {
    const htmlString: string = `
      <div class="trustradius-component">
        <div class="container" >
          <div class="trustradius-tqw" data-trustradius-id="65c0f13fe4798abb8b45d41a"></div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };

  init = (): void => {
    this.loadTrustRadius();

    const loader = new Loader<HTMLScriptElement>();

    loader
      .load(this.scriptLink, TestInfo.ID.toString(), "script")
      .then((element) => {
        console.log("JS loaded...!", element);
      });
  };

  loadTrustRadius = () => {
    const footer: null | HTMLDivElement = document.querySelector(
      selectors.footer
    );

    if (footer === null) {
      return;
    }

    footer.insertAdjacentHTML("beforebegin", this.getTrustRadiusHtml());
  };
}
