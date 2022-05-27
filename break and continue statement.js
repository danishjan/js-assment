// breake  and continue statment 



// break statment 

var i;
for (i =0; i <= 10; i++){
  document.write(i + "<br>");
}
// this  is simple for loop which contine adding and checking the condtion untill it meet the value of i reachedto 10 

// use of brake 
// if there  is condiont i have to stop at some certain point with changing condition we use break method  

// example 
for (i= 0 ; i <= 10; i ++){
  if (i == 8){
    break
  }
  document.write(" Break : <br>")
}

// in this condition when loop reached to value of i to 8 than it break  


// continue

for (i= 0 ; i <= 10; i ++){
  if (i == 8){
    continue
  }
  document.write(" continue : <br>")
}
//  when it  come to the value of i == 8 than the it break the for loop itration  and stop of main statment and contine the loop to 10   
