const {join} = require("path");const base = join(__dirname, "src/clients/brainlab/f5/F5018");const testInfo={id:'F5018',site:'f5',title:'Add "By Cloude Partners" to Home Page',client:'brainlab',target:'https://www.f5.com/',variation:'1'};module.exports={js:join(base,"index.ts"),css:join(base,"styles/main.scss"),testInfo: testInfo};module.exports.logActiveTestInfo=()=>{console.log("Running test info: ",JSON.stringify(testInfo))};