const {join} = require("path");const base = join(__dirname, "src/clients/brainlab/baliblinds/BB012");const testInfo={id:'BB012',site:'baliblinds',title:'4.6M - Sticky header w/ filter and product categories',client:'brainlab',target:'https://www.baliblinds.com/swatches',variation:'1'};module.exports={js:join(base,"index.ts"),css:join(base,"styles/main.scss"),testInfo: testInfo};module.exports.logActiveTestInfo=()=>{console.log("Running test info: ",JSON.stringify(testInfo))};