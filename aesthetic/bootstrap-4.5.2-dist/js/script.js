$(function() {

    $(".navbar-toggler").blur(function(event){
        var screenWidth= window.innerWidth;
        if (screenWidth < 768){
            $("#navbarSupportedContent").collapse("hide");
            
        }
    });

});

(function (global){

    var dc = {};

    var homehtml = "snippets/home-snippet.html";

    var insertHtml = function (selector, html){
        var targetElement = document.querySelector(selector);
        targetElement.innerHTML = html;
    };

    var showLoading = function (selector){
        var html = "<div class = 'text-centre' >"
        html += "<img src = 'images/ajax-loader.gif'></div>";
        insertHtml(selector, html);
    };


    document.addEventListener( "DOMContentLoaded", function(event){
        showLoading ("#main-content");
        $ajaxUtils.sendGetRequest(homehtml, function(responseText){
            insertHtml("#main-content", responseText );} , false )


        });

        global.$dc = dc;




    })(window);

