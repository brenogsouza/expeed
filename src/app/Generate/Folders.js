const generateFolders = (options) => {
    options.map(item => {
        item.props != null ?
            await template.generate({
                template: item.template,
                target: item.target,
                props: {
                    name: item.properties.filename
                }
            }) :
            await template.generate({
                template: item.template,
                target: item.target,
            });
    });
};

module.exports = generateFolders;