const GetPluralName = require('../utils/GetPluralName');
const GetSingularName = require('../utils/GetSingularName');

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

        if (!parameters.first) {
            error('Model name must be specified');
            return;
        }

        const fileName = parameters.first;
        const singularName = GetSingularName();
        const pluralName = GetPluralName();

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
            props: { name: fileName }
        });

        await template.generate({
            template: 'service.js.ejs',
            target: `src/services/${fileName}Service.js`,
            props: {
                name: fileName,
                pluralName: pluralName,
                singularName: singularName,
            }
        });

        await template.generate({
            template: 'newRoutes.js.ejs',
            target: `src/routes.js`,
            props: {
                name: fileName,
                pluralName: pluralName,
                singularName: singularName,
            }
        });

        success(`model, controller and service ${fileName} created successfully!`);
    }
}
