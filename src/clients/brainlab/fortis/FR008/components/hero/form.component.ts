import { formActionLink, getFromSubmissionLink } from "../../common/asset";

export class FormComponent {
  getHtml = () => {
    const htmlString: string = `
      <div class="form-component">
        <div class="component-wrap" >
          <div class="heading" >
            <h3>Want to hear more about Denver College of Nursing?</h3>
          </div>
          <div class="form" >
            <form onsubmit="event.preventDefault()">
              <div class="input" >
                <select id="campus" name="campus" required="true">
                  <option value="" disabled selected hidden>Campus</option>
                  <option value="denver">Denver</option>
                </select>
                <div class="error-msg" >
                  <span>First name required!</span>
                </div>
              </div>
              <div class="input" >
                <input id="first-name" type="text" name="firstName" placeholder="First Name" required="true">
                <div class="error-msg" >
                  <span>First name required!</span>
                </div>
              </div>
              <div class="input" >
                <input id="last-name" type="text" name="lastName" placeholder="Last Name" required="true">
                <div class="error-msg" >
                  <span>Last name required!</span>
                </div>
              </div>
              <div class="input" >
                <input id="email" type="text" name="email" placeholder="Email Address" required="true">
                <div class="error-msg" >
                  <span>Email required!</span>
                </div>
              </div>
              <div class="input" >
                <input id="phone-number" type="text" name="homePhone" placeholder="Phone number" required="true">
                <div class="error-msg" >
                  <span>Phone number required!</span>
                </div>
              </div>
              <div class="input" >
                <input id="zip-code" type="text" name="zipCode" placeholder="ZIP Code" required="true">
                <div class="error-msg" >
                  <span>Zip code required!</span>
                </div>
              </div>
              <div class="action" >
                <button>Request Info</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  activeForm = () => {
    const submitButton: null | HTMLButtonElement =
      document.querySelector("div.action>button");

    const campus: null | HTMLSelectElement =
      document.querySelector("select#campus");

    const firstName: null | HTMLInputElement =
      document.querySelector("input#first-name");

    const lastName: null | HTMLInputElement =
      document.querySelector("input#last-name");

    const email: null | HTMLInputElement =
      document.querySelector("input#email");

    const zipCode: null | HTMLInputElement =
      document.querySelector("input#zip-code");

    const phoneNumber: null | HTMLInputElement =
      document.querySelector("input#phone-number");

    if (
      !submitButton ||
      !campus ||
      !firstName ||
      !lastName ||
      !email ||
      !zipCode ||
      !phoneNumber
    ) {
      return;
    }

    submitButton.addEventListener("click", () => {
      this.collectInputData(
        campus,
        firstName,
        lastName,
        email,
        zipCode,
        phoneNumber
      );
    });
  };

  collectInputData = (
    campus: HTMLSelectElement,
    firstName: HTMLInputElement,
    lastName: HTMLInputElement,
    email: HTMLInputElement,
    zipCode: HTMLInputElement,
    phoneNumber: HTMLInputElement
  ) => {
    if (
      !campus.value &&
      !firstName.value &&
      !lastName.value &&
      !email.value &&
      !zipCode.value &&
      !phoneNumber.value
    ) {
      return;
    }

    this.submitFormData(
      campus.value,
      firstName.value,
      lastName.value,
      email.value,
      zipCode.value,
      phoneNumber.value
    );
  };

  submitFormData = async (
    campus: string,
    firstName: string,
    lastName: string,
    email: string,
    zipCode: string,
    phoneNumber: string
  ) => {
    // window.location.href = getFromSubmissionLink(
    //   campus,
    //   firstName,
    //   lastName,
    //   email,
    //   zipCode,
    //   phoneNumber
    // );

    try {
      const response = await fetch(
        "https://stage.denvercollegeofnursing.edu/bin/rfi?postLocation=https://edaff.edufficient.com/post?&includeDate=false&trackingClickId=&adobeTrackingID=90667384312323897381704469326664061742&state=CO&campus=denver&programOfInterest=Bachelor%20of%20Science%20in%20Nursing&firstName=test&lastName=tst&email=test%40test.com&homePhone=(222)%20222-2222&zipCode=12345&consent=1&leadFormId=51&useEASparkroomBidCid=1&BID=2582&CID=1302&isTest=0&returnId=true"
      );
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };
}
