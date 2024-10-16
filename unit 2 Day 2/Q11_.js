function greetUser(name){
        
  
    if(name==null|| name===""|| name==undefined){
       console.log("Hello, Guest!");
    }
    else{
     console.log("Hello, "+ name + "!");
    }
  }
  let username = prompt("enter your name");
  greetUser(username)