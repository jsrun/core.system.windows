/**
 * Frontend windows events
 * 
 * @author André Ferreira <andrehrf@gmail.com>
 * @license MIT
 */

(function(){
    webide.window = function(namespace, options){
        webide.getContents("GET", namespace, null, function(contents){
            document.querySelector(".wi-window-modal").style.display = "block";
            document.querySelector(".wi-window").innerHTML = contents;
            
            document.querySelector(".wi-window-modal").onclick = function(){
                document.querySelector(".wi-window-modal").style.display = "none";
            };
            
            document.querySelector(".wi-window-header-close").onclick = function(e){
                document.querySelector(".wi-window-modal").style.display = "none";
            };
            
            document.querySelector(".wi-window").onclick = function(e){
                e.preventDefault();
                e.stopPropagation();
            };
            
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
            
            window.onresize = resizeWindow;
            resizeWindow();
            webide.forms.bind();
        });
    };
})();

