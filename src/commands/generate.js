const fs = require('fs');
const command = require('child_process');
const loading = require('loading-cli');

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

    await template.generate({
      template: 'UserController.js.ejs',
      target: `src/controllers/UserController.js`,
    });

    await template.generate({
      template: 'UserRoute.js.ejs',
      target: `src/controllers/Routes/UserRoute.js`,
    });

    await template.generate({
      template: 'UserModel.js.ejs',
      target: `src/models/User.js`,
    });

    await template.generate({
      template: 'UserService.js.ejs',
      target: `src/services/UserService.js`,
    });

    await template.generate({
      template: 'BaseRoutes.js.ejs',
      target: `src/routes.js`,
    });

    await template.generate({
      template: 'server.js.ejs',
      target: `src/server.js`,
    });

    await template.generate({
      template: '.env.js.ejs',
      target: `.env`,
    });


    await template.generate({
      template: 'package.json.js.ejs',
      target: `package.json`,
      props: { name: filename }
    });

    await template.generate({
      template: 'procfile.js.ejs',
      target: `Procfile`,
    });

    await template.generate({
      template: '.gitignore.js.ejs',
      target: `.gitignore`,
    });

    await template.generate({
      template: 'docker-compose.yml.ejs',
      target: `docker-compose.yml`,
    });

    await template.generate({
      template: 'readme.md.ejs',
      target: `README.md`,
      props: {
        name: filename
      }
    });

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
      })
      loading({
        text: 'Installing all the dependencies',
        color: 'blue',
        frames: ["⊶", "⊷"],
      }).start();
    }, 1000)
    load.stop();
  }
}
