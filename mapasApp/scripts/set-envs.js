

const { writeFileSync, mkdirSync} = require('fs');

require('dotenv').config();

const targetPah = './src/environments/environment.ts';

const envFileContent = `
export const environment = {
  mapbox_key: "${ process.env['MAPBOX_KEY']}"
}
`;


mkdirSync('./src/environments', {recursive: true});

writeFileSync(targetPah, envFileContent);





