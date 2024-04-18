import { formActionLink } from "../../common/asset";

export class FormComponent {
  getHtml = () => {
    const htmlString: string = `
      <div class="form-component">
        <div class="component-wrap" >
          <div class="heading" >
            <h3>Want to hear more about Denver College of Nursing?</h3>
          </div>
          <div class="form" >
            <form action="${formActionLink}" method="GET" >
              <div class="input" >
                <select name="campus">
                  <option value="campus">Campus</option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
                <div class="error-msg" >
                  <span>First name required!</span>
                </div>
              </div>
              <div class="input" >
                <input type="text" name="firstName" placeholder="First Name" required="true">
                <div class="error-msg" >
                  <span>First name required!</span>
                </div>
              </div>
              <div class="input" >
                <input type="text" name="lastName" placeholder="Last Name" required="true">
                <div class="error-msg" >
                  <span>Last name required!</span>
                </div>
              </div>
              <div class="input" >
                <input type="text" name="email" placeholder="Email Address" required="true">
                <div class="error-msg" >
                  <span>Email required!</span>
                </div>
              </div>
              <div class="input" >
                <input type="text" name="homePhone" placeholder="Phone number" required="true">
                <div class="error-msg" >
                  <span>Phone number required!</span>
                </div>
              </div>
              <div class="input" >
                <input type="text" name="zipCode" placeholder="ZIP Code" required="true">
                <div class="error-msg" >
                  <span>Zip code required!</span>
                </div>
              </div>
              <div class="action" >
                <button type="submit">Request Info</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };
}
