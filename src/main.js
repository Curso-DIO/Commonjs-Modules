const { getProductLabel, getFullName } = require('./services/products');
const { devArea, client } = require('./services/config');
const database = require('./services/database');

async function main() {
    console.log('Testando!!!');
    getFullName(408, 'Computador')
    getProductLabel('Mouse')

    console.log(devArea.production)
    console.log(client.device)
    await database.connectToDatabase('Postgres')
}

main()