const { consola } = require('consola');

async function test() {
  consola.start('Creating project...');
  await new Promise((resolve) => setTimeout(resolve, 2000));
  consola.success('Project created!');
}

test();
