import { cities } from "../common/asset";

export class FormComponent {
  getStepTwoFormHtml = (): string => {
    const htmlString: string = `
      <div class="component-wrap step-two" >
        <div class="headline" >
          <h3>Get a Free Information Kit along with your savings!</h3>
        </div>
        <form action="/api/PostHomePageCI" class="customer-form step-two" method="post">
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
              <button id="show-price-btn" >Show Prices</button>
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
        <form class="customer-form step-one">
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
              <button id="view-price-btn" >View Prices</button>
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

  active = () => {
    const customerForm: null | HTMLFormElement = document.querySelector(
      "form.customer-form.step-one"
    );

    const firstName: null | HTMLInputElement =
      document.querySelector("input#FirstName");

    const lastName: null | HTMLInputElement =
      document.querySelector("input#LastName");

    const email: null | HTMLInputElement =
      document.querySelector("input#Email");

    const contactOptionId: null | HTMLInputElement = document.querySelector(
      "input#ContactOptionId"
    );

    const zipCode: null | HTMLInputElement =
      document.querySelector("input#ZipCode");

    const phone: null | HTMLInputElement =
      document.querySelector("input#Phone");

    const viewPriceBtn: null | HTMLInputElement = document.querySelector(
      "button#view-price-btn"
    );

    if (!firstName) {
      return;
    }

    if (!lastName) {
      return;
    }

    if (!email) {
      return;
    }

    if (!contactOptionId) {
      return;
    }

    if (!zipCode) {
      return;
    }

    if (!phone) {
      return;
    }

    if (!customerForm) {
      return;
    }

    customerForm.addEventListener("submit", (e: SubmitEvent) => {
      e.preventDefault();
      console.log("prevent-default");
    });

    viewPriceBtn &&
      viewPriceBtn.addEventListener("click", () => {
        this.submit(
          {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            contactOptionId: contactOptionId.value,
            zipCode: zipCode.value,
            phone: phone.value,
          },
          1
        );
      });
  };

  submit = async (data: any, step: number) => {
    console.log("step-one-data=", data);

    const formData = new FormData();

    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("contactOptionId", data.contactOptionId);
    formData.append("zipCode", data.zipCode);
    formData.append("phone", data.phone);

    const response = await fetch(
      "https://www.sunsetter.com/api/PostHomePageCI",
      {
        method: "POST",
        body: formData,
      }
    );

    console.log(await response.json());

    // const form = document.createElement("form");
    // document.body.appendChild(form);

    // form.action = "https://www.sunsetter.com/api/PostHomePageCI";
    // form.method = "post";

    // const firstName = document.createElement("input");
    // firstName.value = data.firstName;
    // firstName.name = "FirstName";
    // form.appendChild(firstName);

    // const lastName = document.createElement("input");
    // lastName.value = data.lastName;
    // lastName.name = "LastName";
    // form.appendChild(lastName);

    // const zipCode = document.createElement("input");
    // zipCode.value = data.zipCode;
    // zipCode.name = "ZipCode";
    // form.appendChild(zipCode);

    // const phone = document.createElement("input");
    // phone.value = data.phone;
    // phone.name = "Phone";
    // form.appendChild(phone);

    // const contactOptionId = document.createElement("input");
    // contactOptionId.value = data.contactOptionId;
    // contactOptionId.name = "ContactOptionId";
    // form.appendChild(contactOptionId);

    // const email = document.createElement("input");
    // email.value = data.email;
    // email.name = "Email";
    // form.appendChild(email);

    // console.log("forma=", form);

    // form.submit();
  };
}
