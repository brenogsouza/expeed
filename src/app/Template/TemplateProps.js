const TemplateProps = async (template, target, props) => {
    await template.generate({
        template: template,
        target: target,
        props: props,
    })
};

module.exports = TemplateProps;