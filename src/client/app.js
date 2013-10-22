/**
 * Created by dns on 21.10.13.
 */

define(function(require, exports, module) {
    var Ember = require("ember");

    var App = Ember.Application.create(
        {
            LOG_TRANSITIONS : true,
            LOG_ACTIVE_GENERATION : true,
            LOG_VIEW_LOOKUPS : true
        }
    );

    exports.App = App;
});

