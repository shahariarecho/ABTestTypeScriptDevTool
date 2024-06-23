export class HeroComponent {
  getHtml = () => {
    const htmlString: string = `
      <div class="hero-component" >
        <div class="component-wrap" >
          <div class="heading" >
            <h2>IGNITE YOUR FUTURE AT</h2>
            <h2>FORTIS COLLEGE [CAMPUS]</h2>
          </div>
          <div class="sub-heading" >
            <h4>Take Your Career Into Your Own Hands</h4>
          </div>
          <div class="cta" >
            <button>LEARN HOW TO APPLY</button>
          </div>
          <div class="description" >
            <p>Classes taught in English only</p>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };
}
