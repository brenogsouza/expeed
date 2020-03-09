export const foldersOptions = (filename) => {
    return {
        properties: {
            filename: filename,
        },
        templates: [
            {
                template: 'UserController.js.ejs',
                target: `src/controllers/UserController.js`,
            },

            {
                template: 'UserRoute.js.ejs',
                target: `src/controllers/Routes/UserRoute.js`,
            },

            {
                template: 'UserModel.js.ejs',
                target: `src/models/User.js`,
            },

            {
                template: 'UserService.js.ejs',
                target: `src/services/UserService.js`,
            },

            {
                template: 'BaseRoutes.js.ejs',
                target: `src/routes.js`,
            },

            {
                template: 'server.js.ejs',
                target: `src/server.js`,
            },

            {
                template: '.env.js.ejs',
                target: `.env`,
            },

            {
                template: 'package.json.js.ejs',
                target: `package.json`,
                props: {
                    name: filename
                }
            },

            {
                template: 'procfile.js.ejs',
                target: `Procfile`,
            },

            {
                template: '.gitignore.js.ejs',
                target: `.gitignore`,
            },

            {
                template: 'docker-compose.yml.ejs',
                target: `docker-compose.yml`,
            },

            {
                template: 'readme.md.ejs',
                target: `README.md`,
                props: {
                    name: filename
                }
            }

        ];
    }, 
};