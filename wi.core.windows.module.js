/**
 * Core windows module
 * 
 * @author André Ferreira <andrehrf@gmail.com>
 * @license MIT
 */

let SystemException = require("../core.plugins.exception.js"),
    TemplateEngine = require("../core.plugins.template.js");

module.exports = {
    /**
     * List module assets
     * @type object
     */
    assets: {
        css: [__dirname + "/wi.core.windows.style.css"],
        js: [__dirname + "/dragresize.min.js", __dirname + "/wi.core.windows.events.js"]
    },
    
    /**
     * Function to generate template
     * 
     * @param object webide
     * @return string
     */
    getTemplate: function(settings, dirname, argv, app, i18n, passport, mongodb, webide){
        return TemplateEngine(__dirname + "/wi.core.windows.tpl.ejs").seti18n(i18n).render();
    }
}