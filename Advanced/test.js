function getGroceries(){
    let groceries = ["milk", "bread", "eggs"];
    console.log(groceries);

    callFriend("will", (data)=>{
        for (let i = 0; i < data.length; i++){
            groceries.push(data[i]);
        }

        console.log(groceries);
    });

    console.log("I need groceries");
}

function callFriend(phone, cb){
    let friends = {
        "will":["bacon", "tomato", "lettuce"],
        "rob":["apple pie", "vanilla ice cream", "cake"]
    }

    let buddy = friends[phone];

    window.setTimeout(()=>{
        cb(buddy);
    },2000);
}

getGroceries();