module.exports = function(grunt) {

    grunt.initConfig({

        watch: {
            handlebars_templates: {
                files: ["src/client/templates/**/*.hbs"],
                tasks: ['emberTemplates']
            }
        },

        /*
          Finds Handlebars templates and precompiles them into functions.
          The provides two benefits:

          1. Templates render much faster
          2. We only need to include the handlebars-runtime microlib
             and not the entire Handlebars parser.

          Files will be written out to dependencies/compiled/templates.js
          which is required within the project files so will end up
          as part of our application.

          The compiled result will be stored in
          Ember.TEMPLATES keyed on their file path (with the 'app/templates' stripped)
        */
        emberTemplates: {
            options: {
                templateName: function(sourceFile) {
                    return sourceFile.replace(/src\/client\/templates\//, '');
                }
            },
            'src/client/templates.js': ["src/client/templates/**/*.hbs"]
        },

    bgShell: {
        supervisor: {
            cmd: 'supervisor server.js',
            stdout: true,
            stderr: true,
            bg: true
        }
    }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-bg-shell');

    grunt.registerTask('server', ['emberTemplates', 'bgShell:supervisor', 'watch']);
};
