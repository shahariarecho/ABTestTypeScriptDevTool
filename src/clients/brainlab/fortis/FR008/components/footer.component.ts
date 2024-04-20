import { logoImgSrc } from "../common/asset";

export class FooterComponent {
  getHtml = (): string => {
    const htmlString: string = `
      <div class="footer-component" >
        <div class="component-wrap" >
          <div class="logo" >
            <div class="logo-img" >
              <img src="${logoImgSrc}" alt="logo image" >
            </div>
            <div class="logo-slogan" >
              <h3>Denver College of Nursing</h3>
            </div>
          </div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };
}
