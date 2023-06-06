var endgame= false;
var player = 1;
var mark;
var win_audio = new Audio("win.mp3");
win_audio.loop=true;

$(".cell").click(function(){
    if (endgame === false){
        var cell_id = $(this).attr("id");
        if (player%2===0){
            mark="O";
        }
        else {
            mark="X";
        }
        var should_fill = $("#"+cell_id).text();
        if (should_fill!="X" && should_fill!="O"){
            $("#"+cell_id).text(mark);
            makeSound();
            buttonAnimation(cell_id);
        }
        var win = checkWin(player);
        if (player%2===0){
            player=2;
        }
        else {
            player=1;
        }
        if (win===1){
            $(".message").text("Player "+player+" Won 🏅");
            $("img").removeClass("disappear");
            $(".row").addClass("disappear");
            $(".cell").text("");
            $(".message").addClass("big-font");
            win_audio.play();
        }
        else if (win===0){
            $(".message").text("Draw 🤝🏼");
        }
        player++;
        if (endgame===false){
            if (player%2===0){
                player=2;
            }
            else {
                player=1;
            }
            $(".message").text("Player "+player+" 's turn");
        }
    }
});

function checkWin(player){
    if (endgame===false){
        if (player%2===0){
            mark="O";
        }
        else {
            mark="X";
        }
        if (($("#cell1").text()===mark && $("#cell2").text()===mark && $("#cell3").text()===mark) || ($("#cell4").text()===mark && $("#cell5").text()===mark && $("#cell6").text()===mark) || ($("#cell7").text()===mark && $("#cell8").text()===mark && $("#cell9").text()===mark) || ($("#cell1").text()===mark && $("#cell4").text()===mark && $("#cell7").text()===mark) || ($("#cell2").text()===mark && $("#cell5").text()===mark && $("#cell8").text()===mark) || ($("#cell3").text()===mark && $("#cell6").text()===mark && $("#cell9").text()===mark) || ($("#cell1").text()===mark && $("#cell5").text()===mark && $("#cell9").text()===mark) || ($("#cell3").text()===mark && $("#cell5").text()===mark && $("#cell7").text()===mark)){
            endgame=true;
            return 1;
        }
        else if (($("#cell1").text()==="X" || $("#cell1").text()==="O") && ($("#cell2").text()==="X" || $("#cell2").text()==="O") && ($("#cell3").text()==="X" || $("#cell3").text()==="O") && ($("#cell4").text()==="X" || $("#cell4").text()==="O") && ($("#cell5").text()==="X" || $("#cell5").text()==="O") && ($("#cell7").text()==="X" || $("#cell7").text()==="O") && ($("#cell8").text()==="X" || $("#cell8").text()==="O") && ($("#cell9").text()==="X" || $("#cell9").text()==="O")){
            endgame=true;
            return 0;
        }
        else {
            return -1;
        }
    }
}

$(".btn").click(function(){
    player=1;
    endgame=false;
    $(".message").text("Start the game");
    $("img").addClass("disappear");
    $(".row").removeClass("disappear");
    $(".cell").text("");
    $(".message").removeClass("big-font");
    win_audio.pause();
})

function buttonAnimation(cell_id){
    $("#"+cell_id).addClass("pressed");
    setTimeout(function(){
        $("#"+cell_id).removeClass("pressed");
    },100);
}

function makeSound() {
    var audio = new Audio("click.mp3");
    audio.play();
}