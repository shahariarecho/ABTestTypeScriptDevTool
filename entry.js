const {join} = require("path");const base = join(__dirname, "src/clients/brainlab/graberblinds/GB008");const testInfo={id:'GB008',site:'graberblinds',title:'8.3 CTA Cards for Product Category Pages',client:'brainlab',target:'https://www.graberblinds.com/window-treatments/blinds',variation:'1'};module.exports={js:join(base,"index.ts"),css:join(base,"styles/main.scss"),testInfo: testInfo};module.exports.logActiveTestInfo=()=>{console.log("Running test info: ",JSON.stringify(testInfo))};