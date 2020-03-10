const Template = async (template, target) => {
    await template.generate({
        template: template,
        target: target,
    })
};

module.exports = Template;