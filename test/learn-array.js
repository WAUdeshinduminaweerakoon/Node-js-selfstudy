let names = ["nimal","saman","sunil"];
// //index - 0,1,2...
// console.log(names);//[ 'nimal', 'saman', 'sunil' ]
// console.log(names[0]);// nimal
// names[0] = "kamal";
// console.log(names[0]);//kamal
// console.log(names.length);//3

// for(let i=0;i<names.length;i++){
//     console.log(names[i]);
// }
// console.log("----------------------------");
// for(let name of names){
//     console.log(name);
// }
// names[3]="kamal";
// console.log(names);
// console.log("----------------------------");
// names.push("Udesh");//add end
// console.log(names);
// console.log("----------------------------");
// names.unshift("Indumina");//ade front
// console.log(names);
// console.log("----------------------------");
// names.pop();
// console.log(names);// delet the end 
// console.log("----------------------------");
// names.shift();// delet the front
// console.log(names);

// console.log(process.argv);
// /*[
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\Node js\\test\\learn-array.js',
//   '12',
//   'abcde'
// ]*/
const marks= process.argv[2];

if(marks>50){
    console.log("pass");
}




