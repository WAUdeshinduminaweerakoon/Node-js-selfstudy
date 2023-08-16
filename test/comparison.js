/*
Comparison Operation
== equal to
=== equal value and equal type
!= not equal
!== not equal value or not equal type
> greater than 
< less than
>= greater than or equal to
<= less than or equal to
*/

const x = -10;
const  y = -20;
if(x>y){
    console.log("true");
}

const input = "A";

if(input=="A"){
    console.log("Excellent");
}else if(input=="B"){
    console.log("Very Good");
}else if(input=="C"){
    console.log("Good");
}else if(input=="S"){
    console.log("Pass");
}else if(input=="W"){
    console.log("Fail");

}else{
    console.log("Not valid Enter");
}