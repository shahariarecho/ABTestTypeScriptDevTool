const { join } = require("path");
const base = join(__dirname, "src/clients/brainlab/f5/F5022");
const testInfo = {
  id: "F5022",
  site: "f5",
  title: 'BLTEST048.2 - "learn from ebook" style',
  client: "brainlab",
  target: "https://www.f5.com/go/ebook/alt/waap-buyers-guide",
  variation: "2",
};
module.exports = {
  js: join(base, "index.ts"),
  css: join(base, "styles/main.scss"),
  testInfo: testInfo,
};
module.exports.logActiveTestInfo = () => {
  console.log("Running test info: ", JSON.stringify(testInfo));
};
