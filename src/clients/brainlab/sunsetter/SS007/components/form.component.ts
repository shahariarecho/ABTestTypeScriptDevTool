import { cities } from "../common/asset";

export class FormComponent {
  getStepTwoFormHtml = (): string => {
    const htmlString: string = `
      <div class="component-wrap" >
        <div class="headline" >
          <h3>Get a Free Information Kit along with your savings!</h3>
        </div>
        <form action="/api/PostHomePageCI" class="customer-form" method="post">
          <div class="input-area" >
            <div class="name" >
              <label>Address</label>
            </div>
            <div class="input" >
              <input autocomplete="on" id="AddressLine1" maxlength="40" name="AddressLine1" placeholder="Address 1" type="text" value="">
            </div>
          </div>
          <div class="input-area" >
            <div class="name" >
              <label>Address 2</label>
            </div>
            <div class="input" >
              <input autocomplete="on" id="AddressLine2" maxlength="40" name="AddressLine2" placeholder="Address 2" type="text" value="">
            </div>
          </div>
          <div class="input-area" >
            <div class="name" >
              <label>Zip Code</label>
            </div>
            <div class="input" >
              <input autocomplete="on" class="autopopulate-zipcode" id="ZipCode" maxlength="20" name="ZipCode" placeholder="Zip Code" type="text" value="">
            </div>
          </div>
          <div class="input-area" >
            <div class="name" >
              <label>City</label>
            </div>
            <div class="input" >
              <input autocomplete="on" id="City" maxlength="30" name="City" placeholder="City" type="text" value="">
            </div>
          </div>
          <div class="input-area" >
            <div class="input" >
              <select id="State" name="State">
                <option selected="selected" value="">Select State</option>
                ${cities
                  .map(
                    (city: any) =>
                      `<option value="${city.key}">${city.value}</option>`
                  )
                  .join("\n")}
              </select>
            </div>
          </div>
          <div class="submit-area" >
            <input type="submit" value="Show Prices" >
          </div>
        </form>
        <div class="form-footer" >
          <div class="skip" >
            <a>Skip for now</a>
          </div>
          <div class="footer-text" >
            <p>Your contact information is kept confidential. We do not distribute it to outside sources. Read our <a href="/cm/privacy/" >privacy policy</a>.</p>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  getStepOneFormHtml = (): string => {
    const htmlString: string = `
      <div class="component-wrap" >
        <div class="headline" >
          <h3>Get a Free Information Kit along with your savings!</h3>
        </div>
        <form action="/api/PostHomePageCI" class="customer-form" method="post">
          <div class="input-area" >
            <div class="name" >
              <label>Address</label>
            </div>
            <div class="input" >
              <input autocomplete="on" id="AddressLine1" maxlength="40" name="AddressLine1" placeholder="Address 1" type="text" value="">
            </div>
          </div>
          <div class="input-area" >
            <div class="name" >
              <label>Address 2</label>
            </div>
            <div class="input" >
              <input autocomplete="on" id="AddressLine2" maxlength="40" name="AddressLine2" placeholder="Address 2" type="text" value="">
            </div>
          </div>
          <div class="input-area" >
            <div class="name" >
              <label>Zip Code</label>
            </div>
            <div class="input" >
              <input autocomplete="on" class="autopopulate-zipcode" id="ZipCode" maxlength="20" name="ZipCode" placeholder="Zip Code" type="text" value="">
            </div>
          </div>
          <div class="input-area" >
            <div class="name" >
              <label>City</label>
            </div>
            <div class="input" >
              <input autocomplete="on" id="City" maxlength="30" name="City" placeholder="City" type="text" value="">
            </div>
          </div>
          <div class="input-area" >
            <div class="input" >
              <select id="State" name="State">
                <option selected="selected" value="">Select State</option>
                ${cities
                  .map(
                    (city: any) =>
                      `<option value="${city.key}">${city.value}</option>`
                  )
                  .join("\n")}
              </select>
            </div>
          </div>
          <div class="submit-area" >
            <input type="submit" value="Show Prices" >
          </div>
        </form>
        <div class="form-footer" >
          <div class="skip" >
            <a>Skip for now</a>
          </div>
          <div class="footer-text" >
            <p>Your contact information is kept confidential. We do not distribute it to outside sources. Read our <a href="/cm/privacy/" >privacy policy</a>.</p>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  getHtml = (): string => {
    const htmlString: string = `
      <div class="form-component" >
        ${this.getStepOneFormHtml()}
      </div>
    `;

    return htmlString.trim();
  };
}
