/**
 * Created by dns on 22.10.13.
 */

require.config({
    paths: {
        "ember": "vendor/ember/ember-1.0.0",
        "jquery": "vendor/jquery/jquery-2.0.3",
        "handlebars": "vendor/handlebars/handlebars.runtime-1.0.0",
        "bootstrap": "vendor/bootstrap/js/bootstrap"
    },

    // for non-AMD modules
    shim: {
        "ember": {
            exports: "Ember"
        },
        "handlebars": {
            exports: "Handlebars"
        }
    }
});

require(["jquery", "handlebars", "ember"], function () {
    // Вложенные вызовы require необходимы, чтобы обеспечить определенный порядок загрузки скриптов.
    require(["bootstrap", "src/client/templates", "src/client/app"], function () {
        require(["src/client/router"], function () {

        });
    });
});


