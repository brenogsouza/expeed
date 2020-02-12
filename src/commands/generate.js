const fs = require('fs');

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

    fs.mkdirSync('src');

    await template.generate({
      template: 'UserController.js.ejs',
      target: `src/controllers/UserController.js`,
    })

    await template.generate({
      template: 'UserModel.js.ejs',
      target: `src/models/User.js`,
    })

    await template.generate({
      template: 'UserService.js.ejs',
      target: `src/services/UserService.js`,
    })

    await template.generate({
      template: 'routes.js.ejs',
      target: `src/routes.js`,
    })

    await template.generate({
      template: 'server.js.ejs',
      target: `src/server.js`,
    })

    await template.generate({
      template: '.env.js.ejs',
      target: `.env`,
    })


    await template.generate({
      template: 'package.json.js.ejs',
      target: `package.json`,
      props: { name: parameters.first }
    })

    await template.generate({
      template: 'procfile.js.ejs',
      target: `Procfile`,
    })

    success('Folders generated succesfully');
  }
}
