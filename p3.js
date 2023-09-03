let num_hit = 0;
let num_miss = 0;

let mybutton_click = document.getElementById('mouse');
let count_hit = document.getElementById('count_hit');
let count_miss = document.getElementById('count_miss');
let else_click = document.getElementById('game_me');
let stop_game = document.getElementById('game_stop');

mybutton_click.addEventListener("click", (e) =>{
    num_hit += 1;
    console.log("me");
    console.log(num_hit);
    count_hit.innerHTML = "HIT : " + num_hit;
    num_miss -=1;
    count_miss.innerHTML = "MISS : " + num_miss;
});

else_click.addEventListener("click", (e) =>{
    num_miss += 1;
    console.log("other");
    console.log(num_miss);
    count_miss.innerHTML = "MISS : " + num_miss;
});

stop_game.addEventListener("click", (e)=>{
    if(num_hit - num_miss >=2){
        alert("You won the game");
    }
    else{
        alert("You LOST!!!");
    }
    num_hit = 0;
    num_miss = 0;
    count_hit.innerHTML = "HIT : 00";
    count_miss.innerHTML = "MISS : 00"
    
});
