let chara = document.querySelector(".character");
    let tambahatas = 0;
    let tambahkiri = 0;
    let style1 = 0;
    let style2 = 0;
    let style3 = 0;
    let style4 = 0;
    let duduk = 0;
    let tangkap = [];
    $(".character").append("<img id='girl' src='Assets/Catch/Bawah1.png'>")
function gerak(result){
    // Atas
    if (result.keyCode == 38){
        $("#girl").remove()
        duduk = 0;
        tambahatas = tambahatas - 10
        chara.style.top = tambahatas + "px"
        if (style1 == 0) {
            $(".character").append("<img id='girl' src='Assets/Catch/Atas2.png'>")
            style1 = 1
        }
        else if (style1 == 1) {
            $(".character").append("<img id='girl' src='Assets/Catch/Atas3.png'>")
            style1 = 2
        }
        else if (style1 == 2) {
            $(".character").append("<img id='girl' src='Assets/Catch/Atas4.png'>")
            style1 = 3
        }
        else if (style1 == 3) {
            $(".character").append("<img id='girl' src='Assets/Catch/Atas5.png'>")
            style1 = 4
        }
        else if (style1 == 4) {
            $(".character").append("<img id='girl' src='Assets/Catch/Atas6.png'>")
            style1 = 5
        }
        else if (style1 == 5) {
            $(".character").append("<img id='girl' src='Assets/Catch/Atas7.png'>")
            style1 = 0
        }
    }
    // Bawah
    if (result.keyCode == 40){
        $("#girl").remove()
        duduk = 1;
        tambahatas = tambahatas + 10
        chara.style.top = tambahatas + "px"
        if (style2 == 0) {
            $(".character").append("<img id='girl' src='Assets/Catch/Bawah2.png'>")
            style2 = 1
        }
        else if (style2 == 1) {
            $(".character").append("<img id='girl' src='Assets/Catch/Bawah3.png'>")
            style2 = 2
        }
        else if (style2 == 2) {
            $(".character").append("<img id='girl' src='Assets/Catch/Bawah4.png'>")
            style2 = 3
        }
        else if (style2 == 3) {
            $(".character").append("<img id='girl' src='Assets/Catch/Bawah5.png'>")
            style2 = 4
        }
        else if (style2 == 4) {
            $(".character").append("<img id='girl' src='Assets/Catch/Bawah6.png'>")
            style2 = 5
        }
        else if (style2 == 5) {
            $(".character").append("<img id='girl' src='Assets/Catch/Bawah7.png'>")
            style2 = 0
        }
    }
    // Kiri
    if (result.keyCode == 37){
        $("#girl").remove()
        duduk = 2;
        tambahkiri = tambahkiri - 10
        chara.style.left = tambahkiri +"px"
        if (style3 == 0) {
            $(".character").append("<img id='girl' src='Assets/Catch/Kiri2.png'>")
            style3 = 1
        }
        else if (style3 == 1) {
            $(".character").append("<img id='girl' src='Assets/Catch/Kiri3.png'>")
            style3 = 2
        }
        else if (style3 == 2) {
            $(".character").append("<img id='girl' src='Assets/Catch/Kiri4.png'>")
            style3 = 3
        }
        else if (style3 == 3) {
            $(".character").append("<img id='girl' src='Assets/Catch/Kiri5.png'>")
            style3 = 4
        }
        else if (style3 == 4) {
            $(".character").append("<img id='girl' src='Assets/Catch/Kiri6.png'>")
            style3 = 5
        }
        else if (style3 == 5) {
            $(".character").append("<img id='girl' src='Assets/Catch/Kiri7.png'>")
            style3 = 0
        }
    }
    // Kanan
    if (result.keyCode == 39){
        $("#girl").remove()
        duduk = 3;
        tambahkiri = tambahkiri + 10
        chara.style.left = tambahkiri +"px"
        if (style4 == 0) {
            $(".character").append("<img id='girl' src='Assets/Catch/Kanan2.png'>")
            style4 = 1
        }
        else if (style4 == 1) {
            $(".character").append("<img id='girl' src='Assets/Catch/Kanan3.png'>")
            style4 = 2
        }
        else if (style4 == 2) {
            $(".character").append("<img id='girl' src='Assets/Catch/Kanan4.png'>")
            style4 = 3
        }
        else if (style4 == 3) {
            $(".character").append("<img id='girl' src='Assets/Catch/Kanan5.png'>")
            style4 = 4
        }
        else if (style4 == 4) {
            $(".character").append("<img id='girl' src='Assets/Catch/Kanan6.png'>")
            style4 = 5
        }
        else if (style4 == 5) {
            $(".character").append("<img id='girl' src='Assets/Catch/Kanan7.png'>")
            style4 = 0
        }
    }
    // Duduk
    if (result.keyCode == 32){
        $("#girl").remove()
        if (duduk == 0){
            $(".character").append("<img id='girl' src='Assets/Catch/Atas8.png'>")
        }
        else if (duduk == 1){
            $(".character").append("<img id='girl' src='Assets/Catch/Bawah8.png'>")
        }
        else if (duduk == 2){
            $(".character").append("<img id='girl' src='Assets/Catch/Kiri8.png'>")
        }
        else if (duduk == 3){
            $(".character").append("<img id='girl' src='Assets/Catch/Kanan8.png'>")
        }
    }
    // Cek Sekitar
    for(j=1;j<20;j++){
        let data1 = document.querySelector('.character');
        let data2 = document.querySelector(".pokemon"+j).getBoundingClientRect();
        let xjarak = data1.offsetLeft - data2.left;
        let yjarak = data1.offsetTop - data2.top;
        if ((xjarak < -70 || xjarak > 30) || (yjarak > 30 || yjarak < -70)) {
            $(".catch").html("")
        }
    }
    for(i=1;i<20;i++){
        let data1 = document.querySelector('.character');
        let data2 = document.querySelector(".pokemon"+i).getBoundingClientRect();
        let data3 = document.querySelector(".pokemon"+i).id;
        let xjarak = data1.offsetLeft - data2.left;
        let yjarak = data1.offsetTop - data2.top;
        if ((xjarak > -70 && xjarak < 30) && (yjarak < 30 && yjarak > -70)){
            $(".catch").html("Press X to Catch")
            if(result.keyCode == 88){
                let chance = Math.floor(Math.random()*11)
                if (chance <5) {
                    alert("Failed to catch!")
                }
                else {
                    tangkap.push(data3);
                    alert("Gotcha!! You got it!")
                }
                $(".pokemon"+i).css({"display":"none"})
                console.log(tangkap)
            }
        }
    }
    
}
    document.onkeydown = gerak;

let urutan = 1;
for (i=1;i<20;i++){
    let x = Math.floor(Math.random()*1365)
    let y = Math.floor(Math.random()*620)
    let random = Math.floor(Math.random()*500)+1
    $.getJSON("https://pokeapi.co/api/v2/pokemon/"+random+"/", function(result){
        $(".container").append("<div> <img class='pokemon"+urutan+"' id="+result.id+" src='"+result.sprites.front_default+"' style='position:absolute; left:"+x+"px; top:"+y+"px;'> </div>")
        urutan = urutan + 1
    })
}
function tas(){
    $(".gambarcatch").html("");
    $(".layer1").css({"visibility":"visible"})
    for (i=0;i<tangkap.length;i++){
        $.getJSON("https://pokeapi.co/api/v2/pokemon/"+tangkap[i], function(result){
            $(".gambarcatch").append("<img class='pokecatch' src='"+result.sprites.front_default+"'>")
        })
    }
}
function exit(){
    $(".layer1").css({"visibility":"hidden"})
}