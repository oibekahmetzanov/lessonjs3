
 //задание 1
 function minNumab(numA, numB){
    if(numA < numB){
        console.log('первое число меньше второго');
    }else if(numA > numB){
        console.log('второе число меньше первого');
    }else if(numA = numB){
        console.log('числа равны');
    }
    }
    minNumab(9, 9)

//задание 3
function sum(numbers) {
    if (numbers.length == 0) return 0; // возвращаем 0, если длинна массива равна 0
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  };
  
 console.log(sum ([2, 3, 5]));


//задание 2
 let a = 2;
let b = 3;

function step (a, b) {
  console.log(a ** b);
}
step(a, b); 


//задача4
    let fonNumber = '0555114877 :';
    let smstext = 'ваша бынковская карта готова ,вы можете забрать ее в отделении банка ';

    function lansms(fonNumber, smstext) {
        console.log(fonNumber + smstext);
    }
    lansms(fonNumber, smstext);
    


// задача 5

const bankAccount = {
   Number: '+996995200910',
   balance: 19000,
   sendTransfer: (Bank_account_number, amount) => {
   console.log('номер банковского счета:', Bank_account_number,',', 'баланс счета:',bankAccount.balance,',', 'сумма для перевода :', amount, ',', 'остаток:', bankAccount.balance - amount);
          }
      }
      console.log(bankAccount.sendTransfer('+996995200910', 9000))
      bankAccount.balance = balance - amount;
     


     