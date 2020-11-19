function getNumer(number) {
    let evenNumber = 0;
    let notEvenNumber = 0 ;
    let zero = 0;
    for (let i = 0; i < number.length; i++) {

        if (typeof number[i] !== 'number' || isNaN(number[i])) { break;
        } else if (number[i] === 0) { zero += 1
        } else if (number[i] % 2 === 0) {  evenNumber += 1;
        } else if (number[i] % 2 !== 0) {  notEvenNumber +=1;
        }
    }
    console.log(`четных ${evenNumber}`);
    console.log(`не четных ${notEvenNumber}`);
    console.log(`ноль  ${zero}`);
}

let listOfNumbers = [2,3,4,5,6,3,3,0,null,'dscd',NaN];
let  showsum = getNumer(listOfNumbers);
