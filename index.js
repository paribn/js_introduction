// let userType = prompt("Reason")


// switch (userType) {
//     case "dekabr":
//     case "yanvar":
//     case fevral:
//         console.log("qish fesli")
//         break;
//     case mart:
//     case aprel:
//     case may:
//         console.log("yaz fesli")
//         break;
//     case iyun:
//     case iyul:
//     case avqust:
//         console.log("yay fesli")
//         break;

//     case sentyabr:
//     case oktyabr:
//     case noyabr:
//         console.log("payiz fesli")
//         break;
// }


// let girishbali = Number(prompt("girish balini daxil edin!"))
// let finalbal = Number(prompt("final  balini daxil edin"))
// let totalbal= girishbali+finalbal;

// if (totalbal>90 && totalbal<=100)  {
//     console.log("A");
// }
// if (totalbal>80 && totalbal<=90) {
//     console.log("B");
// }
// if (totalbal>70 && totalbal <=80) {
//     console.log("C");
// }
// if (totalbal>50 && totalbal <=60) {
//     console.log("D");
// }

// for (let i=10; i<=100; i++){

//     if (i%2===0 && i%6===0/10 ) {
//         console.log(i)
//     }
// }

// for(let i =10; i<=100; i++){
//  let secondNumber =i%10;
//  let firstNumber =Math.floor(i/10);


// }

// let num= Number(prompt("eded daxil edin"));
// let fact=1;

// if(num==0){
//     fact=1;
// }else{

//     while(num>0){

//         fact*=num;
//         num--;
//     }
// }
// console.log(fact)
// program to generate a multiplication table

// take input from the user

// const number = parseInt(prompt('Enter an integer: '));

// for(let i = 1; i <= 10; i++) {

//     const result = i * number;

//     console.log(`${number} * ${i} = ${result}`);
// }

// let myArray = [10, 2, 4, 21, 23, 1, 100, 54, 67, 35];

// for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] % 5 == 0) {
//         console.log(myArray[i])
//     }

// }

// let maxnum = myArray[0];
// for (let i = 0; i < myArray.length; i++) {

//     if (myArray[i] > maxnum) {
//         maxnum = myArray[i]
//     }

// }

// console.log(maxnum);

// let minnum = myArray[0];

// for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i]<minnum) {
//         minnum=myArray[i]

//     }
// }
// console.log(minnum);

// let myArray =[2,45,13,44,88,11];
// let sum=0;

// for (let i = 0; i <myArray.length; i++) {

//     if (myArray[i]%2==0) {

//         sum+=myArray[i];
//     }
// }
// console.log(sum);

//ARRAYDAKI EDEDLERI EDEDI ORTASI 
//ededlerin cemini bolursen sayina

// let num = [1,5,4];
// let sum=0;
// let count=0;


// for (let i = 0; i < num.length; i++) {

//     sum+=num[i];
//     count++;
// }
// let average=sum/count;
// console.log(average);


// let array ="peri"

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);  
// }

// for (let i = array.length-1; i >=0; i--) {
//    console.log(array[i]);
// }

//ededin kubLArinin cemi ededin ozunu verir bu armstrong ededdir.
//reqemlerin kuublarinin cemi 
// let num = prompt('regemi daxil edin')
// let arm =0;

// for (let i = 0; i < num.length; i++) {

//     let number=num[i];
//     arm+=number*number*number;

// }
// if (num==sum) {
//    alert(`armstrong ededidir ${num}`)
// }
// else{
//    alert(`armstrong deyil ${num}`)
// }

let money = 400;

let newLine = "\r\n";
const options = `1.View my money ${newLine}
2.get money ${newLine}
3.Set money ${newLine}
4.exist Program ${newLine}`

let chosse = prompt(options)

switch (chosse) {
   case "1":
      alert(`Your Current money is: ${money}`)
      break;
   case "2":
      let getMoney = Number(prompt("please enter getMoney:"))
      if (getMoney < money) {
         alert(`Your current money is: ${monney - getMoney}`);
      } else {
         alert(
            `You can't get money: ${newLine}
            You current money is: ${money}${newLine}
            Your getMoney is: ${getMoney}${newLine}
            Missing money is:${getMoney - money}`);

      }
      break;
   case "3":
      let setMoney = Number(prompt('Please enter setMoney:'));
      alert(`Your current money is: ${money + setMoney}`);
      break;
   case "4":
      alert('Your exist this program:');
      break;

   default:
      alert('Please enter valid option:')
      break;
}

