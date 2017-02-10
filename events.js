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

webide.module("window", function(forms){
    webide.modal = function(data, options, fn){
        $(".wi-window-modal").css("display", "block");
        $(".wi-window").html(data);
        $(".wi-window-modal").click(function(){ $(".wi-window-modal").css("display", "none"); });
        $(".wi-window-header-close").click(function(e){ $(".wi-window-modal").css("display", "none"); });
        $(".wi-btn-cancel").click(function(e){ $(".wi-window-modal").css("display", "none"); });
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
        forms.bind();
        
        if(typeof fn == "function")
            fn();
    };
    
    webide.windowRemote = function(url, options, fn){
        webide.getContents("GET", url, null, function(contents){
            $(".wi-window-modal").css("display", "block");
            $(".wi-window").html(contents);
            $(".wi-window-modal").click(function(){ $(".wi-window-modal").css("display", "none"); });
            $(".wi-window-header-close").click(function(e){ $(".wi-window-modal").css("display", "none"); });
            $(".wi-btn-cancel").click(function(e){ $(".wi-window-modal").css("display", "none"); });
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
            forms.bind();
            
            if(typeof fn == "function")
                fn();
        });
    };
    
    webide.windowFormBuilder = function(title, schema, options, fn){
        var id = new Date().getTime();
        var buttons = "";
        
        if(options.createbutton)
            buttons += "<button class='wi-btn wi-btn-ok'>Send</button>\r\n";
        if(options.cancelbutton)
            buttons += "<button class='wi-btn wi-btn-cancel'>Cancel</button>\r\n";
        
        webide.modal('<div class="wi-window-header">'+
                     '   <div class="wi-window-header-title">' + title + '</div>'+
                     '   <div class="wi-window-header-close" title="Close"><i class="fa fa-times" aria-hidden="true"></i></div>'+
                     '</div>'+
                     '<div class="wi-window-main"><form id="form-' + id + '"></form></div>'+
                     '<div class="wi-window-footer">'+
                     '   <div class="float-right">' + buttons + '</div>'+
                     '</div>', options, function(){
                        $(".wi-window-main form").formRender({formData: schema, dataType: 'json'});
                        
                        if(typeof fn == "function")
                            fn("#form-" + id);
                    });        
    };
    
    webide.confirm = function(title, question, options, fn){
        var id = new Date().getTime();
        var buttons = "";
        
        buttons += "<button class='wi-btn wi-btn-ok'>Yes</button>\r\n";
        buttons += "<button class='wi-btn wi-btn-cancel'>No</button>\r\n";
        
        webide.modal('<div class="wi-window-header">'+
                     '   <div class="wi-window-header-title">' + title + '</div>'+
                     '   <div class="wi-window-header-close" title="Close"><i class="fa fa-times" aria-hidden="true"></i></div>'+
                     '</div>'+
                     '<div class="wi-window-main">' + question + '</div>'+
                     '<div class="wi-window-footer">'+
                     '   <div class="float-right">' + buttons + '</div>'+
                     '</div>', options, function(){
                        $(".wi-btn-ok").click(function(){
                            webide.closeWindow();
                            
                            if(typeof fn == "function")
                                fn();
                        });                        
                    }); 
    };
    
    webide.closeWindow = function(){
        $(".wi-window-modal").css("display", "none");
    };
});

