const {join} = require("path");const base = join(__dirname, "src/clients/brainlab/consumercellular/CC019");const testInfo={id:'CC019',site:'consumercellular',title:'8.14 Social Proof Reviews',client:'brainlab',target:'https://www.consumercellular.com/shopping',variation:'2'};module.exports={js:join(base,"index.ts"),css:join(base,"styles/main.scss"),testInfo: testInfo};module.exports.logActiveTestInfo=()=>{console.log("Running test info: ",JSON.stringify(testInfo))};