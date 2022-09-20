  "use strict";
const options = {
     name: 'test',
     widht: 1024,
     leight: 1024,
     colors: {
         border: 'black',
         bg: 'red'
     }
   };

  for (let key in options) {
       if (typeof(options[key]) === "object") {
          for (let i in options[key]) {
                 console.log(`Свойство ${i} имеет значение ${options[key] [i]}`);
           }
           } else {
           console.log(`Свойство ${key} имеет значение ${options[key]}`);
       }
     }

function getMathResult(num, times) {
  if (typeof (times) !== 'number' || times <= 0) {
    return num;
  }

  let str = '';

  for (let i = 1; i <= times; i++) {
    if (i === times) {
      str += `${num * i}`;
      // Тут без черточек в конце
    } else {
      str += `${num * i}---`;
      // Это тоже самое, что и
      // str = str + num * i + "---"
    }
  }

  return str;
}