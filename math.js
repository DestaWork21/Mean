
function zer_negativity(arr){
for(var i=0; i<arr.length; i++){
    if(arr[i]<0){
        return false;
    }
    }
return true;
}

function is_even(num){
    
    if(num%2 ==0){
        return true;
    }
    return false;
}



function how_many_even(arr){
    let counter = 0;
    for(let i=0; i<arr.length; i++){
        if(is_even==true){
            counter ++;
        }

    }
    
    return counter;
}

function domyArry(n){
    let arr =  [];
    for(let i=0; i<n; i++){
        arr[0]=Math.random()*10;
    }
    return arr;
}

function random_choice(arr){
    return arr[Math.floor(Math.random()*arr.length)];

}
let arr=[200, 300, 400, 500];
console.log(random_choice(arr));


