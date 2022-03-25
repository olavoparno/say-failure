#!/usr/bin/env node

const meow = require("meow");
const sayFailure = require("./index");

const cliMode = async ({ flags }) => {
  while (true) await sayFailure();
};

const cliInterface = meow({});
cliMode(cliInterface);
