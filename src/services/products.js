// Manipula exclusivamente os produtos 

const productType = {
    version: 'digital',
    tax: 'x1'
};

//hidden const - constante escondida
const apiURL = {
    url: 'www.google.com/api'
}

async function getFullName(codeId, productName) {
    console.log("product:" + codeId + "---" + productName);
    await doBreakLine();
};

//hidden function - função escondida
async function doBreakLine() {
    console.log('\n')
};

async function getProductLabel(productName) {
    console.log("Product:" + productName);
};

module.exports = {
    getFullName,
    getProductLabel,
    productType
};