const {join} = require("path");const base = join(__dirname, "src/clients/brainlab/classicindustries/CI003");const testInfo={id:'CI003',site:'classicindustries',title:'7.1_VLP_Catalog Download_PopUpForm',client:'brainlab',target:'https://shop.classicindustries.com/lp/1958-1996_chevrolet_impala_and_full_size_chevrolet_parts',variation:'1'};module.exports={js:join(base,"index.ts"),css:join(base,"styles/main.scss"),testInfo: testInfo};module.exports.logActiveTestInfo=()=>{console.log("Running test info: ",JSON.stringify(testInfo))};