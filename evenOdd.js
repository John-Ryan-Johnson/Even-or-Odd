
function evenOrOdd(number) {
  if(number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
};
console.log(evenOrOdd(4));
console.log(evenOrOdd(7));





const randomNums= [2,7,13,24,35,46,57,68,79,84,99,122]




const plusOrMinus = (array) => {
  array.forEach((num) => {
    console.log(`${num} is ${evenOrOdd(num)}`)
    
  })
}

plusOrMinus(randomNums)

