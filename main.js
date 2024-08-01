function myRandom(min = 0 , max = 0){
   return Math.floor(Math.random() * (max - min + 1) + min)
}

let user = +prompt ('nechta misol yechishni istaysiz');
let maxRandom = + prompt ("enter max number ")
let minRandom = + prompt ("enter min number ")


for ( i = 0 ; i <user ; i++){
  let symble = myRandom(1 , 4)
  let number1 = myRandom(minRandom ,maxRandom )
  let number2 = myRandom(  minRandom , maxRandom  )
  console.log(number1 ,number2);
            
 if (symble == 1 )  {
   let ans = prompt( `${number1} - ${number2} = ?` )
    ans == number1 - number2 ? alert ("javob togri") : alert(" aldavos  --- togri javob esa " + (number1 - number2)) 
 
 }   
 else  if (symble == 2 )  {
   let ans = prompt( `${number1} * ${number2} = ?` )
   ans == number1 * number2 ? alert ("javob togri") : alert(" aldavos --- togri javob esa " + (number1 * number2)) 
 }  
 else  if (symble == 3 )  {
   let ans = prompt(`${number1} + ${number2} = ?` )
   ans == number1 + number2 ? alert ("javob togri") : alert(" aldavos--- togri javob esa " + (number1 + number2)) 
 }  

else  if (symble == 4 )  {
   let ans = prompt( `${number1} / ${number2} = ?` )
   ans == number1 / number2 ? alert ("javob togri") : alert(" aldavos --- togri javob esa " + (number1 / number2)) 
 }  
}


 
