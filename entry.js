const {join} = require("path");const base = join(__dirname, "src/clients/brainlab/graberblinds/GB013");const testInfo={id:'GB013',site:'graberblinds',title:'3.10 - Homepage product carousel',client:'brainlab',target:'https://www.graberblinds.com',variation:'1'};module.exports={js:join(base,"index.ts"),css:join(base,"styles/main.scss"),testInfo: testInfo};module.exports.logActiveTestInfo=()=>{console.log("Running test info: ",JSON.stringify(testInfo))};