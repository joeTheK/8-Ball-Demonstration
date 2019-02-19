 
 var answers = ["It is certain."," It is decidedly so.","Yes.","Signs point to yes.","Most likely.","Cannot predict now.","Ask again later.","My reply is no.","Don't count on it.","Very doubtful."];

 function answer(){
    let x = Math.floor(Math.random() * answers.length);
    document.getElementById("text").innerHTML = answers[x];
 }
