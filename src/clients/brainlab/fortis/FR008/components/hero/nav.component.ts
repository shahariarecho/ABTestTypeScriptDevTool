import { logoImgSrc } from "../../common/asset";

export class NavComponent {
  getHtml = (): string => {
    const htmlString: string = `
      <div class="nav-component" >
        <div class="component-wrap" >
          <div class="logo" >
            <div class="logo-img" >
              <img src="${logoImgSrc}" alt="logo image" >
            </div>
            <div class="logo-slogan" >
              <h3>Denver College of Nursing</h3>
            </div>
          </div>
          <div class="nav" >
            <div class="request" >
              <a href="" >Request Info</a>
            </div>
            <div class="apply" >
              <a href="" >Apply Now</a>
            </div>
          </div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };
}
