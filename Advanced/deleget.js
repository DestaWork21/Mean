function leadBootcamp(language, leader){
    var outcome = leader(language);
    console.log(outcome);
}
function Mike(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
  }
}
function Charlie(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
  }
}
function Jimmy(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
    'iOS':'successful leader',
    'java_android':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
    }
    }
    leadBootcamp('java_android', Mike);
    leadBootcamp('java_android', Charlie);
    leadBootcamp('java_android', Jimmy);

// This is a function that just prints the result of another list of instructions
function printResult(doSomething) {
    var result = doSomething();         // store the return value of the callback parameter
    console.log(result);                // print the result!
   }
   printResult(function returnFive(){ return 5 })  // this should print "5"



  function getStuffFromDatabase(resolve,reject){
    var data = "whee"
    setTimeout(function(){
      // if (typeof(callback) == 'function'){
        data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
        resolve(data);
      // }
    }, 1000);
    //reject(); comment this line in and out!
    // return data;
}
function requestDataFromDatabase(){
  console.log('running');
  //creates promise
  var data = new Promise(function(resolve,reject){
    getStuffFromDatabase(resolve,reject); // kind of like a shiny callback
  });
  // if promise is successful (keeps me from putting all the logic in the callback)
  data.then(function(data){
    console.log(data, "ASynchronous");
    for (var i = 0; i < data.length; i ++){
      console.log(data[i].name);
    }
  });
  data.catch(function(){
    console.log('failure');
  })
  console.log('end');
}
requestDataFromDatabase();

console.log("**********************************");

   //simulated really slow DB call.
function getStuffFromDatabase(callback){
    var data;
    var myTimer = setTimeout(function(){
      if (typeof(callback) == 'function'){
        //it just got back from the DB!
        data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
        callback(data);
      }
    }, 10000);
    // it takes 10 seconds to get anything back <- you should fix your cloud server.!!!
    return data;
  }    
  //simulated request (failing);
  function requestDataFromDatabase(){
    var data = getStuffFromDatabase(); // this should return my data right??
    console.log(data);
  }
  function catchFly(){
    console.log('I just caught a fly!');
  }
  requestDataFromDatabase();
  // keep running my program!
  console.log('Hello');
  catchFly();

// simulated really slow DB call.
function getStuffFromDatabase(callback){
    var data;
    var myTimer = setTimeout(function(){
      if (typeof(callback) == 'function'){
        data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
        callback(data);
      }
    }, 10000);
    return data;
  }    
  // ************CHANGES HERE **************
  function requestDataFromDatabase(){
    var data = getStuffFromDatabase(function myCallback(data){ // ooh shiny callback!.. when is it invoked???
      console.log(data, "ASynchronous");
      for (var i = 0; i < data.length; i ++){
        console.log(data[i].name);
      }
    });
    console.log(data, "Synchronous");
  }
  //***************** END CHANGES **********************
  function catchFly(){
    console.log('I just caught a fly!');
  }
  requestDataFromDatabase();
  // keep running my program!
  console.log('Hello');
  catchFly();
  //etc.

  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");