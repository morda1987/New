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


    