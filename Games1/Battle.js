        let random = Math.floor(Math.random()*499)+1
        let random2 = Math.floor(Math.random()*499)+1
        function acak(ukuran1, ukuran2){
            $.getJSON("https://pokeapi.co/api/v2/pokemon/"+random+"/", function(result){
                console.log(result)
                $(".pokemon1").append("<img src='"+result.sprites.back_default+"' style='width:"+ukuran1+"px;' >")
                $(".name1").append(result.name)
            })
            $.getJSON("https://pokeapi.co/api/v2/pokemon/"+random2+"/", function(result){
                console.log(result)
                $(".pokemon2").append("<img src='"+result.sprites.front_default+"' style='width:"+ukuran2+"px;'>")
                $(".name2").append(result.name)
            })
        }
        let fieldrandom = Math.floor(Math.random()*4)+1
        $(".field").css({"background-image":"url('Assets/Field"+fieldrandom+".jpg')","background-size":"cover","background-repeat":"no-repeat","background-position": "bottom"})
        if (fieldrandom == 1) {
            $(".player").css({"left":"5%","top":"38%"})
            $(".computer").css({"right":"19%","top":"5%"})
            $(".HP1").css({"left":"-50px","top":"-50px"})
            acak (500, 400);
        }
        else if (fieldrandom == 2) {
            $(".player").css({"left":"15%","top":"35%"})
            $(".computer").css({"right":"15%","top":"3%"})
            acak (500, 300);
        }
        else if (fieldrandom == 3) {
            $(".player").css({"left":"15%","top":"35%"})
            $(".computer").css({"right":"18%","top":"7%"})
            acak (500, 300);
        }
        else if (fieldrandom == 4) {
            $(".player").css({"left":"13%","top":"35%"})
            $(".computer").css({"right":"12%","top":"5%"})
            acak (500, 400);
        }
        
        let hp = 300;
        let hp2 = 300;
        $.getJSON("https://pokeapi.co/api/v2/pokemon/"+random+"/", function(result){
        let skill1 = Math.floor(Math.random()*result.moves.length)
        let skill2 = Math.floor(Math.random()*result.moves.length)
        let skill3 = Math.floor(Math.random()*result.moves.length)
        let skill4 = Math.floor(Math.random()*result.moves.length)
            function skill (tempat, urutan){
                $.getJSON(result.moves[tempat].move.url, function(result){
                    console.log(result)
                    $(".nama"+urutan).append(result.name)
                    $(".acc"+urutan).append(result.accuracy)
                    $(".power"+urutan).append(result.power)
                    $(".type"+urutan).append(result.type.name)
                    if (result.accuracy == null){
                        $(".acc"+urutan).append("-")
                    }
                    if (result.power == null){
                        $(".power"+urutan).append("-")
                    }
                })
            }
            skill(skill1, 1)
            skill(skill2, 2)
            skill(skill3, 3)
            skill(skill4, 4)

            function off() {
                $(".box1").prop("onclick", null).off("click");
                $(".box2").prop("onclick", null).off("click");
                $(".box3").prop("onclick", null).off("click");
                $(".box4").prop("onclick", null).off("click");
            }
            function turn() {
                $(".box1").on("click", jalan (".box1", skill1))
                $(".box2").on("click", jalan (".box2", skill2))
                $(".box3").on("click", jalan (".box3", skill3))
                $(".box4").on("click", jalan (".box4", skill4))
            }

                function jalan(box, random){
                $(box).click(function(){
                    // Jalan Player
                    $.getJSON(result.moves[random].move.url, function(result){
                        off()
                        $(".pokemon1").animate({"left":"100px", "top":"-50px"})
                        $(".pokemon1").animate({"left":"0px", "top":"0px"})
                        let miss = result.accuracy;
                        let akurasi = Math.floor(Math.random()*99)+miss;
                        let damage = result.power/2;
                        console.log(akurasi)
                        if (akurasi > 100){
                            if (result.power == null) {
                                $(".log").append("<p class='logplay'> You Hit the Opponent by 0 </p>")
                            }
                            else {
                                hp = hp - damage
                                console.log(hp)
                                $(".log").append("<p class='logplay'> You Hit the Opponent by "+result.power+" </p>")
                                $(".hpcomputer").css({"width": hp, "transition":"0.3s"})
                                if (hp <= 0) {
                                    $(".log").append("<h1>Player Win!</h1>")
                                    off()
                                    $(".pokemon2").css({"display":"none"})
                                }
                            }
                        }
                        else {
                            $(".log").append("Miss! <br>")
                        }
                    })

                    //Jalan Computer
                    $.getJSON("https://pokeapi.co/api/v2/pokemon/"+random2+"/", function(result){
                        let comp = Math.floor(Math.random()*result.moves.length)
                        $.getJSON(result.moves[comp].move.url, function(result){
                            setTimeout(function(){
                                console.log(hp)
                                if (hp != 0 && hp > 0){
                                    turn()
                                }
                                console.log(result)
                                $(".pokemon2").animate({"left":"-100px", "top":"50px"})
                                $(".pokemon2").animate({"left":"0px", "top":"0px"})
                                let miss2 = result.accuracy;
                                let akurasi2 = Math.floor(Math.random()*99)+miss2;
                                let damage2 = result.power/2;
                                if (akurasi2 > 100){
                                    if (hp <= 0) {
                                        $(".pokemon2").css({"display":"none"})
                                    }
                                    else {
                                    if (result.power == null) {
                                        $(".log").append("<p class='logcomp'> The Opponent Hit You by 0 </p>")
                                    }
                                    else {
                                        hp2 = hp2 - damage2
                                        console.log(hp2)
                                        $(".log").append("<p class='logcomp'> The Opponent Hit You by "+result.power+" </p>")
                                        $(".hpplayer").css({"width": hp2, "transition":"0.3s"})
                                        if (hp2 <= 0) {
                                            $(".log").append("<h1>Computer Win!</h1>")
                                            off()
                                            $(".pokemon1").css({"display":"none"})
                                        }
                                    }
                                }
                                }
                                else {
                                    $(".log").append("Miss! <br>")
                                }
                            }, 1000)
                            if (hp > 200) {
                                $(".hpcomputer").css({"background-color":"greenyellow"})
                            }
                            else if (hp > 100) {
                                $(".hpcomputer").css({"background-color":"yellow"})
                            }
                            else {
                                $(".hpcomputer").css({"background-color":"red"})
                            }
                            if (hp2 > 200) {
                                $(".hpplayer").css({"background-color":"greenyellow"})
                            }
                            else if (hp2 > 100) {
                                $(".hpplayer").css({"background-color":"yellow"})
                            }
                            else {
                                $(".hpplayer").css({"background-color":"red"})
                            }
                    })
                })
            })
            }
            jalan (".box1", skill1)
            jalan (".box2", skill2)
            jalan (".box3", skill3)
            jalan (".box4", skill4)
        })