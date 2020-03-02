const loading = require('loading-cli');
const GetPluralName = require('../utils/GetPluralName');
const GetSingularName = require('../utils/GetSingularName');
const FirstLetterToUpperCase = require('../utils/ToUpperCase');

module.exports = {
    name: 'generate-model',
    description: 'Generate model, controller and service files to the project',
    alias: ['m'],
    run: async toolbox => {
        const {
            parameters,
            template,
            print: { success, error }
        } = toolbox

        const fileName = FirstLetterToUpperCase(parameters.first);

        if (!fileName) {
            error('Model name must be specified');
            return;
        }

        const singularName = GetSingularName(fileName);
        const pluralName = GetPluralName(fileName);

        await template.generate({
            template: 'model.js.ejs',
            target: `src/models/${fileName}.js`,
            props: {
                name: fileName,
                pluralName: pluralName,
            }
        });

        await template.generate({
            template: 'controller.js.ejs',
            target: `src/controllers/${fileName}Controller.js`,
            props: {
                name: fileName,
                pluralName: pluralName,
                singularName: singularName,
            }
        });

        await template.generate({
            template: 'service.js.ejs',
            target: `src/services/${fileName}Service.js`,
            props: {
                name: fileName,
                singularName: singularName,
            }
        });

        await template.generate({
            template: 'newRoutes.js.ejs',
            target: `src/controllers/Routes/${fileName}Route.js`,
            props: {
                name: fileName,
            }
        });

        await template.generate({
            template: 'Routes.js.ejs',
            target: `src/routes.js`,
            props: {
                name: fileName,
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
            load.succeed(`Model, Controller and Service ${fileName} created successfully!`);
        }, 1000)
    }
}
