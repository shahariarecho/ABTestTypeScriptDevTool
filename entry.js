const {join} = require("path");const base = join(__dirname, "src/clients/brainlab/f5/F5009");const testInfo={id:'F5009',site:'f5',title:'BLTEST040 - 2-step Form',client:'brainlab',target:'https://www.f5.com/go/ebook/attacker-economics',variation:'1'};module.exports={js:join(base,"index.ts"),css:join(base,"styles/main.scss"),testInfo: testInfo};module.exports.logActiveTestInfo=()=>{console.log("Running test info: ",JSON.stringify(testInfo))};