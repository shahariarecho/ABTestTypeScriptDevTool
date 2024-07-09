import { cities } from "../common/asset";

export class FormComponent {
  getStepTwoFormHtml = (): string => {
    const htmlString: string = `
      <div class="component-wrap step-two" >
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
            <div class="cta" >
              <input type="submit" value="Show Prices" >
            </div>
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
      <div class="component-wrap step-one" >
        <div class="headline" >
          <h3>Get an Instant $200 Savings on America’s #1 Best Selling Awning!</h3>
        </div>
        <form action="/api/PostHomePageCI" class="customer-form" method="post">
          <div class="input-area" >
            <div class="name" >
              <label>First Name</label>
            </div>
            <div class="input" >
              <input autocomplete="on" id="FirstName" maxlength="30" name="FirstName" placeholder="First Name" type="text" value="">
            </div>
          </div>
          <div class="input-area" >
            <div class="name" >
              <label>Last Name</label>
            </div>
            <div class="input" >
              <input autocomplete="on" id="LastName" maxlength="30" name="LastName" placeholder="Last Name" type="text" value="">
            </div>
          </div>
          <div class="input-area" >
            <div class="name" >
              <label>Email</label>
            </div>
            <div class="input" >
              <input aria-describedby="EmailError" autocomplete="on" data-val="true" data-val-regex="Valid Email is required" data-val-regex-pattern="^(([^<>()\[\]\\.,;:\s@@&quot;]+(\.[^<>()\[\]\\.,;:\s@@&quot;]+)*)|(&quot;.+&quot;))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$" data-val-required="Email is required" id="Email" maxlength="128" name="Email" placeholder="Email" type="text" value="">
            </div>
          </div>
          <div class="input-area" >
            <div class="check-box" >
              <input checked="checked" data-val="true" data-val-required="The ContactOptionId field is required." id="ContactOptionId" name="ContactOptionId" type="checkbox" value="true">
            </div>
            <div class="check-box-label" >
              <p>I would like to receive emails with special promotions from SunSetter.</p>
            </div>
          </div>
          <div class="input-area-tex" >
            <p>Enter your phone number for a FREE in-home consultation</p>
          </div>
          <div class="input-area" >
            <div class="name" >
              <label>Zip Code</label>
            </div>
            <div class="input" >
              <input autocomplete="on" autopopulate-zipcode" id="ZipCode" maxlength="20" name="ZipCode" placeholder="Zip Code" type="text" value="">
            </div>
          </div>
          <div class="input-area" >
            <div class="name" >
              <label>Phone</label>
            </div>
            <div class="input" >
              <input autocomplete="on" id="Phone" maxlength="128" name="Phone" placeholder="Phone" type="text" value="">
            </div>
          </div>
          <div class="submit-area" >
            <div class="submit-area-text" >
              <p><span>*</span> Required Fields</p>
            </div>
            <div class="cta" >
              <input type="submit" value="View Prices" >
            </div>
          </div>
        </form>
        <div class="form-footer" >
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
        ${this.getStepTwoFormHtml()}
      </div>
    `;

    return htmlString.trim();
  };
}
