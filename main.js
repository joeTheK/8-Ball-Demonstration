//  creates an array with all the possible answers
 var answers = ["It is certain."," It is decidedly so.","Yes.","Signs point to yes.","Most likely.","Cannot predict now.","Ask again later.","My reply is no.","Don't count on it.","Very doubtful."];
// makes the fuction that the button will call when clicked
 function answer(){
    //  creates a variable as a placeholder for a random number
    let x = Math.floor(Math.random() * answers.length);
    // grabs element with 'text' as id from documnet and changes it's inner html to answers[x]
    document.getElementById("text").innerHTML = answers[x];
 }

// simple 8-ball code