const Template = require('../Template/Template');
const TemplateProps = require('../Template/TemplateProps');

const generateFolders = (options) => {
    options.templates.map(item => {
        item.props != null ?
            Template(item.template, item.target) :
            TemplateProps(item.template, item.target, options.properties);
    });
};

module.exports = generateFolders;