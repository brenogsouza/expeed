await template.generate({
    template: item.template,
    target: item.target,
    props: {
        name: item.properties.filename
    }