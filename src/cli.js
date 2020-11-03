#!/usr/bin/env node

const meow = require('meow');
const wololo = require('./index')

const cliMode = async ({ flags }) => {
  while(true)
    await wololo()
}

const cliInterface = meow({})
cliMode(cliInterface)
