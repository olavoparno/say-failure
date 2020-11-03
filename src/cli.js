#!/usr/bin/env node

const meow = require('meow');
const sayWololo = require('./index')

const cliMode = async ({ flags }) => {
  while(true)
    await sayWololo()
}

const cliInterface = meow({})
cliMode(cliInterface)
