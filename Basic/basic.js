function magic_multiply(x,y){
    if(x.constructor === Array){
        for(i=0;i<x.length;i++){
                x[i] *=y;
            }
           return x;
        }
    if(y.constructor==String){
        console.log("Error: can not multilply by string");        
    }
    if(x.constructor===String)  {
        let temp =x;
        for(i=0; i<y-1; i++)   {
            x +=temp;
        } 
        return x;   
    }
    if((x===0)&&(y===0)){
        return "All inputs 0"
    }
    x = x*y;
    return x;

 }
  let test1 = magic_multiply(5, 2);
    console.log(test1);

    let test2 = magic_multiply(0, 0);
    console.log(test2);

    let test3 = magic_multiply([1, 2, 3], 2);
    console.log(test3);
    // => [2, 4, 6]
    let test4 = magic_multiply(7, "three");
    console.log(test4);
    
    let test5 = magic_multiply("Brendo", 4);
    console.log(test5);
    // => "BrendoBrendoBrendoBrendo"