function trigger(activate, options) {
  const utils = window.optimizely.get("utils");
  const treatmentSection =
    "section.multi-column-main>div:first-child>div:nth-child(1) div.generic-html-block";

  if (window.location.href.indexOf("https://www.graberblinds.com") !== -1) {
    utils.waitForElement(treatmentSection).then((section) => {
      console.log("section=", section);
      const observer = new IntersectionObserver((entries) => {
        console.log("entries=", entries);
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
            options.isActive && activate({ isActive: false });
            activate();
            console.log("options=", options);
          }
        });
      });

      observer.observe(section);
    });
  }
}
