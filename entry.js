const {join} = require("path");const base = join(__dirname, "src/clients/brainlab/consumercellular/CC012");const testInfo={id:'CC012',site:'consumercellular',title:'4.11 - Quick filters for device types',client:'brainlab',target:'https://www.consumercellular.com/shopping/choose/device',variation:'1'};module.exports={js:join(base,"index.ts"),css:join(base,"styles/main.scss"),testInfo: testInfo};module.exports.logActiveTestInfo=()=>{console.log("Running test info: ",JSON.stringify(testInfo))};