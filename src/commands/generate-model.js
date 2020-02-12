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
        const nameArray = [...fileName];
        const firstLetterLowerCased = nameArray[0].replace(nameArray[0], nameArray[0].toLowerCase());

        let getPluralArray = [];
        let getSingularArray = [];
        let pluralName = [];


        nameArray.map(item => {
            getPluralArray.push(item.replace(nameArray[0], firstLetterLowerCased));
        });

        nameArray.map(item => {
            getSingularArray.push(item.replace(nameArray[0], firstLetterLowerCased));
        });

        pluralName.push(...getSingularArray, 's');

        pluralName = pluralName.join('');
        getSingularArray = getSingularArray.join('');

        await template.generate({
            template: 'model.js.ejs',
            target: `src/models/${fileName}.js`,
            props: {
                name: fileName,
                pluralName: pluralName,
            }
        })

        await template.generate({
            template: 'controller.js.ejs',
            target: `src/controllers/${fileName}Controller.js`,
            props: { name: fileName }
        })

        await template.generate({
            template: 'service.js.ejs',
            target: `src/services/${fileName}Service.js`,
            props: {
                name: fileName,
                pluralName: pluralName,
                singularName: getSingularArray,
            }
        })

        await template.generate({
            template: 'newRoutes.js.ejs',
            target: `src/routes.js`,
            props: {
                name: fileName,
                pluralName: pluralName,
                singularName: getSingularArray,
            }
        })

        success(`model, controller and service ${fileName} created successfully!`);
    }
}
