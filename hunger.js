
let cake = true;
let hunger = true;
let birthday = "May 13th";
if(cake){
// first we check if there is a cake, which is true
    if(hunger === true && birthday === "May 13th"){
    // then we check if both hunger is true and if 
    // birthday is set to a matching string.
        eat_cake();
        // all conditions are met, so we eat cake!
    }else{
        dont_eat_cake();
        // while the cake exists (or else we wouldn't be 
        // executing this line) we were either not hungry or 
        // it was not our birthday, so we won't eat cake :(
    }
}
