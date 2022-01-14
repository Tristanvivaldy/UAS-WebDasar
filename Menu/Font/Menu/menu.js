            let show = 0
            function toggle() {
                if(show == 0) {
                    $("#mainmenu").removeClass("menu");
                    $("#mainmenu").addClass("menuopen");
                    $(".isimenu").css({"display":"block"})
                    $(".judul").css({"display":"block"})
                    $(".logoHFT").css({"display":"block"})
                    $("#mainmenu").animate({left :"0px"})
                    show = 1;
                }
                else if(show == 1) {
                    $("#mainmenu").animate({left :"-225px"})
                    $(".isimenu").css({"display":"none"})
                    $(".judul").css({"display":"none"})
                    show = 0;
                }
            }
            function invert(logo, induk) {
                $(logo).css({"filter":"invert(1)", "transition":"0.6s"});
                $(induk).css({"background-color":"black", "color":"white"});
            }
            function brightness(logo, induk, brightness) {
                $(logo).css({"filter":"brightness("+brightness+")", "transition":"0.6s"});
                $(induk).css({"background-color":"black", "color":"white"});
            }
            function reset(logo1, logo2, logo3, logo4, logo5, logo6, induk1, induk2, induk3, induk4, induk5, induk6) {
                $(logo1).css({"filter":"brightness(0)", "transition":"0.3s"});
                $(logo2).css({"filter":"invert(0)", "transition":"0.3s"});
                $(logo3).css({"filter":"brightness(0)", "transition":"0.3s"});
                $(logo4).css({"filter":"invert(0)", "transition":"0.3s"});
                $(logo5).css({"filter":"brightness(0)", "transition":"0.3s"});
                $(logo6).css({"filter":"invert(0)", "transition":"0.3s"});
                $(induk1).css({"background-color":"#8d8270", "color":"black"});
                $(induk2).css({"background-color":"#8d8270", "color":"black"});
                $(induk3).css({"background-color":"#8d8270", "color":"black"});
                $(induk4).css({"background-color":"#8d8270", "color":"black"});
                $(induk5).css({"background-color":"#8d8270", "color":"black"});
                $(induk6).css({"background-color":"#8d8270", "color":"black"});
                $(".arah").css({"transform": "rotate(-90deg)"})
                $(".arahcolor").css({"color":"black"});
            }
            function arah(){
                $(".arah").css({"transform": "rotate(0deg)"})
            }
            $(".home").hover(function(){
                reset (".logohome", ".logogames", ".logopokedex", ".logofilm", ".logogallery", ".logoabout", ".home", ".games", ".pokedex", ".film", ".gallery", ".about");
                brightness (".logohome", ".home", "5");
            })
            $(".logohome").hover(function(){
                reset (".logohome", ".logogames", ".logopokedex", ".logofilm", ".logogallery", ".logoabout", ".home", ".games", ".pokedex", ".film", ".gallery", ".about");
                brightness (".logohome", ".home", "5");
            })
            $(".games").hover(function(){
                reset (".logohome", ".logogames", ".logopokedex", ".logofilm", ".logogallery", ".logoabout", ".home", ".games", ".pokedex", ".film", ".gallery", ".about");
                invert (".logogames", ".games");
                arah();
                $(".arahcolor").css({"color":"white"});
            })
            $(".logogames").hover(function(){
                reset (".logohome", ".logogames", ".logopokedex", ".logofilm", ".logogallery", ".logoabout", ".home", ".games", ".pokedex", ".film", ".gallery", ".about");
                invert (".logogames", ".games");
                arah();
                $(".arahcolor").css({"color":"white"});
            })
            $(".arah").hover(function(){
                reset (".logohome", ".logogames", ".logopokedex", ".logofilm", ".logogallery", ".logoabout", ".home", ".games", ".pokedex", ".film", ".gallery", ".about");
                invert (".logogames", ".games");
                arah();
                $(".arahcolor").css({"color":"white"});
            })
            $(".pokedex").hover(function(){
                reset (".logohome", ".logogames", ".logopokedex", ".logofilm", ".logogallery", ".logoabout", ".home", ".games", ".pokedex", ".film", ".gallery", ".about");
                brightness (".logopokedex", ".pokedex", "1");
            })
            $(".logopokedex").hover(function(){
                reset (".logohome", ".logogames", ".logopokedex", ".logofilm", ".logogallery", ".logoabout", ".home", ".games", ".pokedex", ".film", ".gallery", ".about");
                brightness (".logopokedex", ".pokedex", "1");
            })
            $(".film").hover(function(){
                reset (".logohome", ".logogames", ".logopokedex", ".logofilm", ".logogallery", ".logoabout", ".home", ".games", ".pokedex", ".film", ".gallery", ".about");
                invert (".logofilm", ".film");
            })
            $(".logofilm").hover(function(){
                reset (".logohome", ".logogames", ".logopokedex", ".logofilm", ".logogallery", ".logoabout", ".home", ".games", ".pokedex", ".film", ".gallery", ".about");
                invert (".logofilm", ".film");
            })
            $(".gallery").hover(function(){
                reset (".logohome", ".logogames", ".logopokedex", ".logofilm", ".logogallery", ".logoabout", ".home", ".games", ".pokedex", ".film", ".gallery", ".about");
                brightness (".logogallery", ".gallery", "1");
            })
            $(".logogallery").hover(function(){
                reset (".logohome", ".logogames", ".logopokedex", ".logofilm", ".logogallery", ".logoabout", ".home", ".games", ".pokedex", ".film", ".gallery", ".about");
                brightness (".logogallery", ".gallery", "1");
            })
            $(".about").hover(function(){
                reset (".logohome", ".logogames", ".logopokedex", ".logofilm", ".logogallery", ".logoabout", ".home", ".games", ".pokedex", ".film", ".gallery", ".about");
                invert (".logoabout", ".about");
            })
            $(".logoabout").hover(function(){
                reset (".logohome", ".logogames", ".logopokedex", ".logofilm", ".logogallery", ".logoabout", ".home", ".games", ".pokedex", ".film", ".gallery", ".about");
                invert (".logoabout", ".about");
            })
            $(".menus").on("mouseleave", function(){
                reset (".logohome", ".logogames", ".logopokedex", ".logofilm", ".logogallery", ".logoabout", ".home", ".games", ".pokedex", ".film", ".gallery", ".about");
            })
            $(".content-dropdown").on("mouseleave", function(){
                reset (".logohome", ".logogames", ".logopokedex", ".logofilm", ".logogallery", ".logoabout", ".home", ".games", ".pokedex", ".film", ".gallery", ".about");
            })
            $(".content").hover(function(){
                reset (".logohome", ".logogames", ".logopokedex", ".logofilm", ".logogallery", ".logoabout", ".home", ".games", ".pokedex", ".film", ".gallery", ".about");
            })