/**
 *  __          __  _    _____ _____  ______ 
 *  \ \        / / | |  |_   _|  __ \|  ____|
 *   \ \  /\  / /__| |__  | | | |  | | |__   
 *    \ \/  \/ / _ \ '_ \ | | | |  | |  __|  
 *     \  /\  /  __/ |_) || |_| |__| | |____ 
 *      \/  \/ \___|_.__/_____|_____/|______|
 *                                                                            
 *  @author André Ferreira <andrehrf@gmail.com>
 *  @license MIT
 */

"use strict";

(function(){
    webide.modal = function(data, options){
        $(".wi-window-modal").css("display", "block");
        $(".wi-window").html(data);
        $(".wi-window-modal").click(function(){ $(".wi-window-modal").css("display", "none"); });
        $(".wi-window-header-close").click(function(e){ $(".wi-window-modal").css("display", "none"); });
        $(".wi-window").click(function(e){ e.preventDefault(); e.stopPropagation(); });

        function resizeWindow(){
            var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth,
                windowHeight = window.innerHeight|| document.documentElement.clientHeight|| document.getElementsByTagName('body')[0].clientHeight;

            for(var key in options){
                switch(key){
                    case "width":
                        document.querySelector(".wi-window").style.width = options[key] + "px";
                        document.querySelector(".wi-window").style.left = ((windowWidth - options[key])/2) + "px";
                    break;
                    case "height": 
                        document.querySelector(".wi-window").style.height = options[key] + "px";
                        document.querySelector(".wi-window").style.top = ((windowHeight - options[key])/2) + "px";
                    break;
                }
            }
        }

        $(window).resize(resizeWindow);
        resizeWindow();
        webide.forms.bind();
    };
    
    webide.windowRemote = function(url, options){
        webide.getContents("GET", url, null, function(contents){
            $(".wi-window-modal").css("display", "block");
            $(".wi-window").html(data);
            $(".wi-window-modal").click(function(){ $(".wi-window-modal").css("display", "none"); });
            $(".wi-window-header-close").click(function(e){ $(".wi-window-modal").css("display", "none"); });
            $(".wi-window").click(function(e){ e.preventDefault(); e.stopPropagation(); });
            
            function resizeWindow(){
                var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth,
                    windowHeight = window.innerHeight|| document.documentElement.clientHeight|| document.getElementsByTagName('body')[0].clientHeight;

                for(var key in options){
                    switch(key){
                        case "width":
                            document.querySelector(".wi-window").style.width = options[key] + "px";
                            document.querySelector(".wi-window").style.left = ((windowWidth - options[key])/2) + "px";
                        break;
                        case "height": 
                            document.querySelector(".wi-window").style.height = options[key] + "px";
                            document.querySelector(".wi-window").style.top = ((windowHeight - options[key])/2) + "px";
                        break;
                    }
                }
            }
            
            $(window).resize(resizeWindow);
            resizeWindow();
            webide.forms.bind();
        });
    };
})();

