const { exec } = require("child_process");
const { promisify } = require("util");
const path = require("path");
const fs = require("fs");

const execPromise = promisify(exec);

const mainPath = path.dirname(fs.realpathSync(__filename));
const windowsScript = path.join(mainPath, "./forWindows.jscript");
const soundConstant = "failure";

function getSoundPath() {
  return path.join(
    mainPath,
    `./audios/${soundConstant}${Math.floor(Math.random() * (7 - 1 + 1)) + 1}`
  );
}

const sayFailure = () => {
  const soundPath = getSoundPath();

  const commandsForEachPlatform = {
    linux: `paplay ${soundPath}.ogg`,
    win32: `cscript /E:JScript /nologo "${windowsScript}" "${soundPath}.mp3"`,
    darwin: `afplay ${soundPath}.mp3`,
  };

  const platform = process.platform;
  const codeToExecute = commandsForEachPlatform[platform];

  return execPromise(codeToExecute);
};

module.exports = sayFailure;
