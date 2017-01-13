/**
 *  __          __  _    _____ _____  ________          ___           _                   
 *  \ \        / / | |  |_   _|  __ \|  ____\ \        / (_)         | |                  
 *   \ \  /\  / /__| |__  | | | |  | | |__   \ \  /\  / / _ _ __   __| | _____      _____ 
 *    \ \/  \/ / _ \ '_ \ | | | |  | |  __|   \ \/  \/ / | | '_ \ / _` |/ _ \ \ /\ / / __|
 *     \  /\  /  __/ |_) || |_| |__| | |____ _ \  /\  /  | | | | | (_| | (_) \ V  V /\__ \
 *      \/  \/ \___|_.__/_____|_____/|______(_) \/  \/   |_|_| |_|\__,_|\___/ \_/\_/ |___/  
 *                                     
 *  @author André Ferreira <andrehrf@gmail.com>
 *  @license MIT
 */

"use strict";

let SystemException = require("../wi.core.exception.js"),
    TemplateEngine = require("../wi.core.template.js");

module.exports = {
    /**
     * List module assets
     * @type object
     */
    assets: {
        css: [__dirname + "/wi.core.windows.style.css"],
        js: [__dirname + "/wi.core.windows.events.js"]
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
};