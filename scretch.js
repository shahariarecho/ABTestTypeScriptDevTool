function executeModification() {
  const mboxName = "thank-you-mbox";
  const VARIATION = "thank-you";
  const testInfo =
    "ID: FR004, VARIATION: " + VARIATION + ", VERSION: 0.0.1, is running....!";
  console.log(testInfo);

  const thankYouKey = sessionStorage.getItem("thank-you-key");

  if (!thankYouKey && thankYouKey === "thank-you-value") {
    console.log("mbox=", mboxName);
    adobe.target.trackEvent({ mbox: mboxName });
  }
}

(function pollOnload() {
  if (document.querySelector("body")) {
    try {
      executeModification();
    } catch (error) {
      console.log("Initialization error:", error);
    }
  } else {
    setTimeout(pollOnload, 2000);
  }
})();
