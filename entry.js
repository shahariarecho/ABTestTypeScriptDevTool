const {join} = require("path");const base = join(__dirname, "src/clients/brainlab/sunsetter/SS004");const testInfo={id:'SS004',site:'sunsetter',title:'3.3 - Trust markers customer reviews/ratings to homepage',client:'brainlab',target:'https://www.sunsetter.com',variation:'1'};module.exports={js:join(base,"index.ts"),css:join(base,"styles/main.scss"),testInfo: testInfo};module.exports.logActiveTestInfo=()=>{console.log("Running test info: ",JSON.stringify(testInfo))};