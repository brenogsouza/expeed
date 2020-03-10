const fs = require('fs');
const command = require('child_process');
const loading = require('loading-cli');

const GenerateFolders = require('../app/Generate/Folders');
const { foldersOptions } = require('../app/Template/Options/FoldersOptions');

module.exports = {
  name: 'generate',
  description: 'Generate all the folders that is required to begin a project using express framework',
  alias: ['g'],
  run: async toolbox => {
    const {
      parameters,
      template,
      print: { success, error }
    } = toolbox


    if (!parameters.first) {
      error('Name of the project must be specified');
      return;
    }

    const filename = parameters.first;

    fs.mkdirSync('src');

    GenerateFolders(foldersOptions(filename));

    const loadingtext = 'Generating all folders and files...';

    const load = loading({
      text: loadingtext,
      color: 'blue',
      frames: ["⊶", "⊷"],
    }).start();

    setTimeout(function () {
      load.color = 'green';
      load.text = 'Almost there...';
      load.frame(["⊶", "⊷"]);
    }, 600)

    setTimeout(function () {
      load.stop()
      load.succeed('Folders generated succesfully')
      
      command.exec('yarn install', (err, stdout, stdin) => {
        if (err)
          console.log('Error to execute command', err);

        console.log(stdout);
        load.succeed('Dependencies installed succesfully!');

      })
    }, 1000)
    load.stop();
  }
}
