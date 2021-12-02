(function($) {
    $("body").imagesLoaded( function() {
        $("body").addClass("loading-done");
        $("[data-animate]").scrolla({
            mobile: true
        });
    });
    $("[data-bg-color], [data-bg-image], [data-bg-particles]").each(function() {
        var $this = $(this);

        if( $this.hasClass("ts-separate-bg-element") ){
            $this.append('<div class="ts-background">');

            // Background Color

            if( $("[data-bg-color]") ){
                $this.find(".ts-background").css("background-color", $this.attr("data-bg-color") );
            }

            // Particles

            if( $this.attr("data-bg-particles-line-color") || $this.attr("data-bg-particles-dot-color") ){
                $this.find(".ts-background").append('<div class="ts-background-particles">');
                $(".ts-background-particles").each(function () {
                    var lineColor = $this.attr("data-bg-particles-line-color");
                    var dotColor = $this.attr("data-bg-particles-dot-color");
                    var parallax = $this.attr("data-bg-particles-parallax");
                    $(this).particleground({
                        density: 15000,
                        lineWidth: 0.2,
                        lineColor: lineColor,
                        dotColor: dotColor,
                        parallax: parallax,
                        proximity: 200
                    });
                });
            }

            // Background Image

            if( $this.attr("data-bg-image") !== undefined ){
                $this.find(".ts-background").append('<div class="ts-background-image">');
                $this.find(".ts-background-image").css("background-image", "url("+ $this.attr("data-bg-image") +")" );
                $this.find(".ts-background-image").css("background-size", $this.attr("data-bg-size") );
                $this.find(".ts-background-image").css("background-position", $this.attr("data-bg-position") );
                $this.find(".ts-background-image").css("opacity", $this.attr("data-bg-image-opacity") );

                $this.find(".ts-background-image").css("background-size", $this.attr("data-bg-size") );
                $this.find(".ts-background-image").css("background-repeat", $this.attr("data-bg-repeat") );
                $this.find(".ts-background-image").css("background-position", $this.attr("data-bg-position") );
                $this.find(".ts-background-image").css("background-blend-mode", $this.attr("data-bg-blend-mode") );
            }

            // Parallax effect

            if( $this.attr("data-bg-parallax") !== undefined ){
                $this.find(".ts-background-image").addClass("ts-parallax-element");
            }
        }
        else {

            if(  $this.attr("data-bg-color") !== undefined ){
                $this.css("background-color", $this.attr("data-bg-color") );
                if( $this.hasClass("btn") ) {
                    $this.css("border-color", $this.attr("data-bg-color"));
                }
            }

            if( $this.attr("data-bg-image") !== undefined ){
                $this.css("background-image", "url("+ $this.attr("data-bg-image") +")" );

                $this.css("background-size", $this.attr("data-bg-size") );
                $this.css("background-repeat", $this.attr("data-bg-repeat") );
                $this.css("background-position", $this.attr("data-bg-position") );
                $this.css("background-blend-mode", $this.attr("data-bg-blend-mode") );
            }

        }
    });
    $(function() {
        var header = $(".header-fix");
      
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 50) {
                header.addClass("scrolled");
            } else {
                header.removeClass("scrolled");
            }
        });
        $('.dropdown').click(function () {
            $(this).attr('tabindex', 1).focus();
            $(this).toggleClass('active');
            $(this).find('.dropdown-menu').slideToggle(300);
        });
        $('.dropdown').focusout(function () {
            $(this).removeClass('active');
            $(this).find('.dropdown-menu').slideUp(300);
        });
        $('.dropdown .dropdown-menu li').click(function () {
            $(this).parents('.dropdown').find('span').text($(this).text());
            $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
        });
    /*End Dropdown Menu*/

    $('.dropdown-menu li').click(function () {
      var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
          msg = '<span class="msg">Hidden input value: ';
      $('.msg').html(msg + input + '</span>');
        }); 
    });

    var icon_menu = document.querySelector(".burger");
    var mobi_overlay = document.querySelector(".mobi-overlay");
    var menu_section = document.querySelector(".page-menu");
    var html = document.querySelector("html");
    var item = document.querySelectorAll(".page-header .page-menu .cos-nav-menu li")
    document.querySelector(".mobi-overlay").addEventListener("click", (e) => { 
        mobi_overlay.classList.remove("show");
        menu_section.style.left = "-300px";
        html.classList.remove("disable-scroll");
    });
    document.querySelector(".burger").addEventListener("click", (e) => { ;
        mobi_overlay.classList.add("show");
        menu_section.style.left = "0";
        html.classList.add("disable-scroll");
    });
    for(i = 0; i < item.length; i++){
        item[i].addEventListener("click", (e) => { 
            mobi_overlay.classList.remove("show");
            menu_section.style.left = "-300px";
            html.classList.remove("disable-scroll");
        });
    }
    var icon_menu = document.querySelector(".burgers");
    var mobi_overlays = document.querySelector(".mobi-overlay");
    var menu_sections = document.querySelector(".cnt-oder-sidebar");
    var html = document.querySelector("html");
    document.querySelector(".mobi-overlay").addEventListener("click", (e) => { 
        mobi_overlays.classList.remove("show");
        menu_sections.style.left = "-320px";
        html.classList.remove("disable-scroll");
    });
    document.querySelector(".burgers").addEventListener("click", (e) => { ;
        mobi_overlays.classList.add("show");
        menu_sections.style.left = "0";
        html.classList.add("disable-scroll");
    });
})(jQuery);

  

   




