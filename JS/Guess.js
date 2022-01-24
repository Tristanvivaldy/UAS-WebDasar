let isi = [];
    let random1 = Math.floor(Math.random()*499)+1
    let kotak = Math.floor(Math.random()*3)+1
    $.getJSON("https://pokeapi.co/api/v2/pokemon/"+random1+"/", function(result){
            let answer = result.name
            console.log(result)
            $(".shadow").append("<img src='"+result.sprites.other["official-artwork"].front_default+"' style='width:400px;' >")
            $(".choice"+kotak).append(result.name)
            isi.push(kotak)
            console.log(answer)
    for(i=1;i<=3;i++){
        let kotak2 = Math.floor(Math.random()*4)+1
        let random2 = Math.floor(Math.random()*499)+1
        console.log(random2)
        $.getJSON("https://pokeapi.co/api/v2/pokemon/"+random2, function(result){
            console.log(result)
            console.log(isi.includes(kotak2))
            while (true) {
                if (isi.includes(kotak2) == false) {
                    isi.push(kotak2)
                    $(".choice"+kotak2).append(result.name)
                    break
                }
                else {
                    kotak2 = Math.floor(Math.random()*4)+1
                }
            }
        })
    }
    $(".choice1").hover(function(){
        $(this).addClass('hover')
    }, function(){
        $(this).removeClass('hover')
    })
    $(".choice2").hover(function(){
        $(this).addClass('hover')
    }, function(){
        $(this).removeClass('hover')
    })
    $(".choice3").hover(function(){
        $(this).addClass('hover')
    }, function(){
        $(this).removeClass('hover')
    })
    $(".choice4").hover(function(){
        $(this).addClass('hover')
    }, function(){
        $(this).removeClass('hover')
    })
    function end(){
        $(".choice1").prop("onclick", null).off("click");
        $(".choice2").prop("onclick", null).off("click");
        $(".choice3").prop("onclick", null).off("click");
        $(".choice4").prop("onclick", null).off("click");
        $(".choice1").unbind("mouseenter mouseleave");
        $(".choice2").unbind("mouseenter mouseleave");
        $(".choice3").unbind("mouseenter mouseleave");
        $(".choice4").unbind("mouseenter mouseleave");
    }
        $(".choice1").click(function(){
            let data = document.querySelector(".choice1").innerHTML;
            if (data == answer) {
                $(".choice1").css({"background-color":"green", "transition":"0.5s", "color":"white", "box-shadow":"5px 5px 0px 0px black"})
                $(".shadow").css({"filter":"brightness(1)"})
                end()
            }
            else {
                $(".choice1").css({"background-color":"red", "transition":"0.5s", "color":"white", "box-shadow":"5px 5px 0px 0px black"})
                $(".shadow").css({"filter":"brightness(1)"})
                $(".choice"+kotak).css({"background-color":"green", "transition":"0.5s", "color":"white", "box-shadow":"5px 5px 0px 0px black"})
                end()
            }
        })
        $(".choice2").click(function(){
            let data = document.querySelector(".choice2").innerHTML;
            if (data == answer) {
                $(".choice2").css({"background-color":"green", "transition":"0.5s", "color":"white", "box-shadow":"5px 5px 0px 0px black"})
                $(".shadow").css({"filter":"brightness(1)"})
                end()
            }
            else {
                $(".choice2").css({"background-color":"red","transition":"0.5s", "color":"white", "box-shadow":"5px 5px 0px 0px black"})
                $(".shadow").css({"filter":"brightness(1)"})
                $(".choice"+kotak).css({"background-color":"green", "transition":"0.5s", "color":"white", "box-shadow":"5px 5px 0px 0px black"})
                end()
            }
        })
        $(".choice3").click(function(){
            let data = document.querySelector(".choice3").innerHTML;
            if (data == answer) {
                $(".choice3").css({"background-color":"green", "transition":"0.5s", "color":"white", "box-shadow":"5px 5px 0px 0px black"})
                $(".shadow").css({"filter":"brightness(1)"})
                end()
            }
            else {
                $(".choice3").css({"background-color":"red", "transition":"0.5s", "color":"white", "box-shadow":"5px 5px 0px 0px black"})
                $(".shadow").css({"filter":"brightness(1)"})
                $(".choice"+kotak).css({"background-color":"green", "transition":"0.5s", "color":"white", "box-shadow":"5px 5px 0px 0px black"})
                end()
            }
        })
        $(".choice4").click(function(){
            let data = document.querySelector(".choice4").innerHTML;
            if (data == answer) {
                $(".choice4").css({"background-color":"green", "transition":"0.5s", "color":"white", "box-shadow":"5px 5px 0px 0px black"})
                $(".shadow").css({"filter":"brightness(1)"})
                end()
            }
            else {
                $(".choice4").css({"background-color":"red", "transition":"0.5s", "color":"white", "box-shadow":"5px 5px 0px 0px black"})
                $(".shadow").css({"filter":"brightness(1)"})
                $(".choice"+kotak).css({"background-color":"green", "transition":"0.5s", "color":"white", "box-shadow":"5px 5px 0px 0px black"})
                end()
            }
        })
})
    console.log(isi)